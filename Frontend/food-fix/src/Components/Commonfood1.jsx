import '../Css/Commonfood1.css';
import burger from '../Images/burger.png';
import Profile from './Profile';


export default function Commonfood1() {
    //  const day = new Date().toLocaleDateString('en-US', { weekday: 'long'}); 
    const day = 'Monday';
    const dataset = {
        monday: {
            breakfast: [
                { name: 'Pancakes', image: burger },
                { name: 'Omelette', image: burger },
                { name: 'Fruit Salad', image: burger },
                { name: 'Pasta Primavera', image: burger },
                { name: 'Pasta Primavera', image: burger },
            ],
            lunch: [
                { name: 'Grilled Chicken', image: burger },
                { name: 'Caesar Salad', image: burger },
                { name: 'Pasta Primavera', image: burger },
            ],
            dinner: [
                { name: 'Steak', image: burger },
                { name: 'Salmon', image: burger },
                { name: 'Vegetable Stir Fry', image: burger },
                { name: 'Pasta Primavera', image: burger },
            ],
            snacks: [
                { name: 'Chips', image: burger },
                { name: 'Cookies', image: burger },
                { name: 'Fruit Smoothie', image: burger },
            ],
            drinks: [
                { name: 'Coffee', image: burger },
                { name: 'Tea', image: burger },
                { name: 'Juice', image: burger },
                { name: 'Pasta Primavera', image: burger },
            ],
        }
        
        // tuesday: { ... },
        // wednesday: { ... },  
        // thursday: { ... },
        // friday: { ... },
        // saturday: { ... },
        // sunday: { ... },

    };


    return (
        <div className="commonfood1">
            <div>
                <Profile />
            </div>
            <h1 id='cm1-head'>Common Food</h1>
            <div className="cm1-day">
                <h2 id='cm1-day'>{day}</h2>
            </div>
            <div id='cm1-dish'>
                <div id='cm1-br'>
                    <div id='cm1-br-head'>
                        <span>Breakfast</span>
                    </div>
                    <div id='cm1-br-dish'>
                        {dataset[day.toLowerCase()].breakfast.map((dish, index) => (
                            <div key={index}>
                                <img src={dish.image} alt={dish.name} />
                                <span>{dish.name}</span>
                            </div>
                        ))}
                    </div>
                    {/* for Breakfast */}
                </div>
                <div id='cm1-lunch'>
                    <div id='cm1-lunch-head'>
                        <span>Lunch</span>
                    </div>
                    <div id='cm1-lunch-dish'>
                        {dataset[day.toLowerCase()].lunch.map((dish, index) => (
                            <div key={index}>
                                <img src={dish.image} alt={dish.name} />
                                <span>{dish.name}</span>
                            </div>
                        ))}
                    </div>
                    {/* for Lunch */}
                </div>
                <div id='cm1-dinner'>
                    <div id='cm1-dinner-head'>
                        <span>Dinner</span>
                    </div>
                    <div id='cm1-dinner-dish'>
                        {dataset[day.toLowerCase()].dinner.map((dish, index) => (
                            <div key={index}>
                                <img src={dish.image} alt={dish.name} />
                                <span>{dish.name}</span>
                            </div>
                        ))}
                    </div>
                    {/* for dinner */}
                </div>
                <div id='cm1-snacks'>
                    <div id='cm1-snacks-head'>
                        <span>Snacks</span>
                    </div>
                    <div id='cm1-snacks-dish'>
                        {dataset[day.toLowerCase()].snacks.map((dish, index) => (
                            <div key={index}>
                                <img src={dish.image} alt={dish.name} />
                                <span>{dish.name}</span>
                            </div>
                        ))}
                    </div>
                    {/* for snacks */}
                </div>
                <div id='cm1-drinks'>
                    <div id='cm1-drinks-head'>
                        <span>Drinks</span>
                    </div>
                    <div id='cm1-drinks-dish'>
                        {dataset[day.toLowerCase()].drinks.map((dish, index) => (
                            <div key={index}>
                                <img src={dish.image} alt={dish.name} />
                                <span>{dish.name}</span>
                            </div>
                        ))}
                    </div>
                    {/* for drinks */}
                </div>
            </div>
        </div>
    );
}