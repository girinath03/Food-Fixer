import '../Css/Showcard.css';


export default function Showcard({ items = [] }) {
    const grouped = {
        morning: [],
        afternoon: [],
        night: [],
    };

    items.forEach(item => {
        if (grouped[item.time.toLowerCase()]) {
            grouped[item.time.toLowerCase()].push(item);
        }
    });

    return (
        <div className="showcard">
            {grouped.morning.length > 0 && (
                <MealGroup title="🍽 Breakfast" items={grouped.morning} />
            )}
            {grouped.afternoon.length > 0 && (
                <MealGroup title="🍛 Lunch" items={grouped.afternoon} />
            )}
            {grouped.night.length > 0 && (
                <MealGroup title="🌙 Dinner" items={grouped.night} />
            )}
        </div>
    );
}

function MealGroup({ title, items }) {
    return (
        <div className="section">
            <h3>{title}</h3>
            <ul className="meal-list">
                {items.map((item, idx) => (
                    <li key={idx} className="meal-item">
                        <img src={item.img} alt={item.name} className="meal-img" />
                        <span>{item.name}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
