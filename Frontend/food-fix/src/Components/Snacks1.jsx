import Profile from "./Profile";
import '../Css/Snacks1.css';
import Card from "./Card";


import chipsImg from '../Images/chips.jpg';
import onionbujjyImg from '../Images/onionbujjy.jpg';
import potatofryImg from '../Images/potatofry.jpg';
import bunbutterImg from '../Images/bunbutter.jpeg';
import sundalImg from '../Images/sundal.jpg';
import samosaImg from '../Images/samosa.jpg';
import eggpuffsImg from '../Images/eggpuffs.jpg';

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
                <Card name="CHIPS" img={chipsImg} choice='0' day="MONDAY" range='3' suffix='Pocket'/>
                <Card name="ONION BUJJY" img={onionbujjyImg} choice='0' day="TUESDAY" range='3' suffix='Bujjy'/>
                <Card name="POTATO FRY" img={potatofryImg} choice='0' day="WEDNESDAY" range='2' suffix='Plates'/>
                <Card name="BUN BUTTER" img={bunbutterImg} choice='0' day="THURSDAY" range='3' suffix='Bun'/>
                <Card name="SUNDAL" img={sundalImg} choice='0' day="FRIDAY" range='3' suffix='Plates'/>
                <Card name="SAMOSA" img={samosaImg} choice='0' day="SATURDAY" range='3' suffix='Samosa'/>
                <Card name="EGG PUFFS" img={eggpuffsImg} choice='0' day="SUNDAY" range='3' suffix='Puffs'/>
            </div>
            <div className="snacks1-footer">
                <button onClick={handleClick}>MAIN MENU</button>
            </div>
            <div></div>
        </div>
    )
}