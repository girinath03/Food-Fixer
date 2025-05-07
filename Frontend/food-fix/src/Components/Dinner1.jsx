import Profile from "./Profile";
import Card from "./Card";
import dridly from '../Images/idly.jpg';
import drdosa from '../Images/dosa.jpg';
import druttapam from '../Images/uthapam.jpeg';
import drpongal from '../Images/pongal.jpg';
import drchapati from '../Images/chapathi.jpeg';
import dradai from '../Images/adai.jpeg';
import drravadosa from '../Images/ravadosa.jpeg';
import drupma from '../Images/upma.jpg';
import drappam from '../Images/appam.jpeg';
import dridiyappam from '../Images/idiappam.jpeg';
import { useState } from "react";

import '../Css/Dinner1.css';

export default function Dinner1()
{
    const[noitems,setNoitems] = useState(0);

    const incrementCount = () =>
    {
        if(noitems<10)
        {
            setNoitems(noitems+1);
        }
        else{
            alert("you can only select 10 items.");
        }
    }
    const decrementCount = () => {
        if (noitems > 0) {
            setNoitems(noitems - 1);
        }
    };

    return(
        <div className="dinner1">
            <div>
                <Profile />
            </div>
            <div className="dinner1-header">
                <span>DINNER ITEMS</span>
            </div>
            <div className="card-container">
            <Card name="IDLI" img={dridly} noitems={noitems} incrementCount={incrementCount} decrementCount={decrementCount}/>
            <Card name="DOSA" img={drdosa} noitems={noitems} incrementCount={incrementCount} decrementCount={decrementCount}/>
            <Card name="UTTAPAM" img={druttapam} noitems={noitems} incrementCount={incrementCount} decrementCount={decrementCount}/>
            <Card name="PONGAL" img={drpongal} noitems={noitems} incrementCount={incrementCount} decrementCount={decrementCount}/>
            <Card name="CHAPATI" img={drchapati} noitems={noitems} incrementCount={incrementCount} decrementCount={decrementCount}/>
            <Card name="ADAI" img={dradai} noitems={noitems} incrementCount={incrementCount} decrementCount={decrementCount}/>
            <Card name="RAVA DOSA" img={drravadosa} noitems={noitems} incrementCount={incrementCount} decrementCount={decrementCount}/>
            <Card name="UPMA" img={drupma} noitems={noitems} incrementCount={incrementCount} decrementCount={decrementCount}/>
            <Card name="APPAM" img={drappam} noitems={noitems} incrementCount={incrementCount} decrementCount={decrementCount}/>
            <Card name="IDIYAPPAM" img={dridiyappam} noitems={noitems} incrementCount={incrementCount} decrementCount={decrementCount}/>

            </div>
            <div className="dinner1-footer">
                <button>SUBMIT</button>     
            </div>
        </div>
    )
}