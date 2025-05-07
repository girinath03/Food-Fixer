import Profile from "./Profile";
import Card from "./Card";
import img2 from '../Images/breakfast.jpg';
import '../Css/Dinner1.css';

export default function Dinner1()
{
    return(
        <div className="dinner1">
            <div>
                <Profile />
            </div>
            <div className="dinner1-header">
                <span>DINNER ITEMS</span>
            </div>
            <div className="card-container">
                <Card name="RICE" img={img2}/>
                <Card name="CURRY" img={img2}/>
                <Card name="DAL" img={img2}/>
                <Card name="RAITA" img={img2}/>
                <Card name="PULAV" img={img2}/>
                <Card name="BIRYANI" img={img2}/>
                <Card name="PARATHA" img={img2}/>
                <Card name="CHAPATI" img={img2}/>
            </div>
            <div className="dinner1-footer">
                <button>SUBMIT</button>     
            </div>
        </div>
    )
}