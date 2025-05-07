import Card from "./Card";
import Profile from "./Profile";
import '../Css/Breakfast1.css';
import img1 from '../Images/dinner.jpg';

export default function Breakfast1()
{
    return(
        <div className="breakfast1">
            <div>
                <Profile/>
            </div>
            <div className="breakfast1-body">
                <div className="breakfast1-header">
                    <span>BREAKFAST ITEMS</span>
                </div>
                <div className="card-container">
                    <Card name="IDLY" img={img1}/>
                    <Card name="DOSA" img={img1}/>
                    <Card name="PONGAL" img={img1}/>
                    <Card name="UPMA" img={img1}/>
                    <Card name="POHA" img={img1}/>
                    <Card name="VADA" img={img1}/>
                    <Card name="POORI" img={img1}/>
                    <Card name="CHAPPATHI" img={img1}/>
                </div>
            </div>
            <div className="breakfast1-footer">
                <button>SUBMIT</button>
            </div>
        </div>
    )
}