import Profile from "./Profile";
import '../Css/Snacks1.css';
import Card from "./Card";
import img2 from '../Images/snacks.jpg';
import { useNavigate } from "react-router-dom";

export default function Snacks1(){
    const navigate = useNavigate();
    const handleClick= () => {
        navigate('/mmenu');
    }

    return(
        <div className="snacks1">
            <div>
                <Profile />
            </div>
            <div className="snacks1-header">
                <span>SNACKS ITEMS</span>
            </div>
            <div className="card-container">
                <Card name="CHIPS" img={img2} choice='0' day="MONDAY"/>
                <Card name="ONION BUJJY" img={img2} choice='0' day="TUESDAY"/>
                <Card name="POTATO FRY" img={img2} choice='0' day="WEDNESDAY"/>
                <Card name="BUN BUTTER" img={img2} choice='0' day="THRUSDAY"/>
                <Card name="SUNDAL" img={img2} choice='0' day="FRIDAY"/>
                <Card name="SAMOSA" img={img2} choice='0' day="SATURDAY"/>
                <Card name="EGG PUFFS" img={img2} choice='0' day="SUNDAY"/>
            </div>
            <div className="snacks1-footer">
                <button onClick={handleClick}>MAIN MENU</button>
            </div>
            <div></div>
        </div>
    )
}