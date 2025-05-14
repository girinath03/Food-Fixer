import Profile from "../Profile";
import img from '../../Images/bunbutter.jpeg';
import '../../Css/Admin/Queries1.css';

export default function Queries1() {

    const data = [
        {
            id: 1,
            name: "John Doe",
            type:"suggestion",
            foodname: "Pasta",
            foodtype:"Non-vegetarian",
            foodtiming:"morning",
            status: "Pending",
            foodimage:img,
        },
        {
            id: 2,
            name: "Jane Smith",
            type:"complaint",
            issuetype: "Food not tasty",
            foodtiming: "afternoon",
            proofimg: img,
            status: "Pending",
            complaint: "To lodge a food complaint in Ottakkalmandapam, Tamil Nadu, you can contact the Tamil Nadu Food Safety Commissioner's office or use the Food Safety Connect platform. The State Consumer Helpline Number is also available. You can also reach out to the FSSAI Grievance Officer for South Region. ",
        },
        {
            id: 1,
            name: "John Doe",
            type:"suggestion",
            foodname: "Pasta",
            foodtype:"Non-vegetarian",
            foodtiming:"morning",
            status: "Pending",
            foodimage:img,
        },
        {
            id: 2,
            name: "Jane Smith",
            type:"complaint",
            issuetype: "Food not tasty",
            foodtiming: "afternoon",
            proofimg: img,
            status: "Pending",
            complaint: "To lodge a food complaint in Ottakkalmandapam, Tamil Nadu, you can contact the Tamil Nadu Food Safety Commissioner's office or use the Food Safety Connect platform. The State Consumer Helpline Number is also available. You can also reach out to the FSSAI Grievance Officer for South Region. ",
        },
        {
            id: 1,
            name: "John Doe",
            type:"suggestion",
            foodname: "Pasta",
            foodtype:"Non-vegetarian",
            foodtiming:"morning",
            status: "Pending",
            foodimage:img,
        },
        {
            id: 2,
            name: "Jane Smith",
            type:"complaint",
            issuetype: "Food not tasty",
            foodtiming: "afternoon",
            proofimg: img,
            status: "Pending",
            complaint: "To lodge a food complaint in Ottakkalmandapam, Tamil Nadu, you can contact the Tamil Nadu Food Safety Commissioner's office or use the Food Safety Connect platform. The State Consumer Helpline Number is also available. You can also reach out to the FSSAI Grievance Officer for South Region. ",
        },
        {
            id: 2,
            name: "Jane Smith",
            type:"complaint",
            issuetype: "Food not tasty",
            foodtiming: "afternoon",
            proofimg: img,
            status: "Pending",
            complaint: "To lodge a food complaint in Ottakkalmandapam, Tamil Nadu, you can contact the Tamil Nadu Food Safety Commissioner's office or use the Food Safety Connect platform. The State Consumer Helpline Number is also available. You can also reach out to the FSSAI Grievance Officer for South Region. ",
        },{
            id: 2,
            name: "Jane Smith",
            type:"complaint",
            issuetype: "Food not tasty",
            foodtiming: "afternoon",
            proofimg: img,
            status: "Pending",
            complaint: "To lodge a food complaint in Ottakkalmandapam, Tamil Nadu, you can contact the Tamil Nadu Food Safety Commissioner's office or use the Food Safety Connect platform. The State Consumer Helpline Number is also available. You can also reach out to the FSSAI Grievance Officer for South Region. ",
        }
    ];
    return (
        <div className='adminqueries1' id='ad-queries1-mbdy'>
            <div>
                <Profile />
            </div>
            <div  id="ad-queries1-bdy">
                <div id="ad-queries1-complaint-header">
                    <span>COMPLAINT</span>
                </div>
                <div id="ad-queries1-complaint-main">
                    {data.map((item) => (
                        <div id="ad-queries1-complaint">
                            {
                            item.type === "complaint" && (
                                <div key={item.id} className="ad-queries1-card">
                                    <div className="ad-queries1-card-complaint">
                                        <div className="ad-queries1-card-header">
                                            <h3>{item.name}</h3>
                                            <p>{item.type}</p>
                                        </div>
                                        <p><span> Complaint Type: </span> {item.issuetype}  </p>
                                        <p><span> Timing : </span> {item.foodtiming}  </p>
                                        <p><span> Complaint: </span> {item.complaint}  </p>
                                        <span id="ad-queries-img"><img src={item.proofimg} alt="Proof" /></span>
                                        <div className="ad-queries1-card-footer">
                                            <button>Resolve</button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div><br/>
                <div id="ad-queries1-suggesstion-header">
                    <span>SUGGESSTION</span>
                </div>
                <div id="ad-queries1-suggesstion-main">
                    {data.map((item) => (
                    <div id="ad-queries1-suggestion">
                        {
                            item.type === "suggestion" && (
                            <div key={item.id} className="ad-queries1-card">
                                <div className="ad-queries1-card-suggestion">
                                    <div className="ad-queries1-card-header">
                                        <h3>{item.name}</h3>
                                        <p>{item.type}</p>
                                    </div>
                                    <p><span> Food Name : </span> {item.foodname}  </p>
                                    <p><span> Food Type: </span> {item.foodtype}  </p>
                                    <p><span> Food Timing: </span> {item.foodtiming}  </p>
                                    <span id="ad-queries-img"><img src={item.foodimage} alt="Food" /></span>
                                    <div className="ad-queries1-card-footer">
                                        <button>Resolve</button>
                                    </div>
                                </div>
                            </div>    
                        )}
                    </div>
                    ))}
                </div>
            </div>
        </div>
    );
}