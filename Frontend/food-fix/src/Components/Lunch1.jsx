import Card from "./Card";
import img2 from '../Images/lunch.webp';
import '../Css/Lunch1.css';            
import Profile from "./Profile";
export default function Lunch1()
{
    return(
        <div className="lunch1">
            <div>
                <Profile />
            </div>
            <div className="lunch1-header">
                <span>LUNCH ITEMS</span>
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
            <div className="lunch1-footer">
                <button>SUBMIT</button>
            </div>
            <div>
                
            </div>
        </div>
    )
}