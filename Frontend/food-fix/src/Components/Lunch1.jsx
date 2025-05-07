import Card from "./Card";

import drrice from '../Images/rice.jpg';
import drcurd from '../Images/curd.jpg';
import drrasam from '../Images/rasam.jpeg';
import drappalam from '../Images/appalam.jpeg';
import drsambar from '../Images/sambar.jpeg';
import drchapatiLunch from '../Images/chapathi.jpeg';
import drdal from '../Images/dal.jpeg';
import drvegetablecurry from '../Images/vegetablecurry.jpg';
import drfriedrice from '../Images/friedrice.jpeg';
import drcurdri from '../Images/curdrice.jpeg';
import drparotta from '../Images/parotta.jpeg';
import drpulao from '../Images/pulao.jpeg';
import drkootu from '../Images/kootu.jpeg';
import { useState } from "react";

import '../Css/Lunch1.css';            
import Profile from "./Profile";
export default function Lunch1()
{
    const [noitems,setNoitems] = useState(0);
    const incrementCount = () =>
    {
        if(noitems<5)
        {
            setNoitems(noitems+1);
        }
        else{
            alert("you can only select 5 items.");
        }
    }
    const decrementCount = () => {
        if (noitems > 0) {
            setNoitems(noitems - 1);
        }
    };

    return(
        <div className="lunch1">
            <div>
                <Profile />
            </div>
            <div className="lunch1-header">
                <span>LUNCH ITEMS</span>
            </div>
            <div className="lunch1-bdy">
                <div className="card-container">
                    <Card name="RICE" img={drrice} noitems={noitems} incrementCount={incrementCount} decrementCount={decrementCount} choice='*'/>
                    <Card name="CURD" img={drcurd} noitems={noitems} incrementCount={incrementCount} decrementCount={decrementCount} choice='*'/>
                    <Card name="RASAM" img={drrasam} noitems={noitems} incrementCount={incrementCount} decrementCount={decrementCount} choice='*'/>
                    <Card name="APPALAM" img={drappalam} noitems={noitems} incrementCount={incrementCount} decrementCount={decrementCount} choice='*'/>
                    <Card name="SAMBAR" img={drsambar} noitems={noitems} incrementCount={incrementCount} decrementCount={decrementCount} choice='*'/>
                    <Card name="CHAPATI" img={drchapatiLunch} noitems={noitems} incrementCount={incrementCount} decrementCount={decrementCount} crange='5'/>
                    <Card name="DAL" img={drdal} noitems={noitems} incrementCount={incrementCount} decrementCount={decrementCount} crange='5'/>
                    <Card name="VEG CURRY" img={drvegetablecurry} noitems={noitems} incrementCount={incrementCount} decrementCount={decrementCount} crange='5'/>
                    <Card name="FRIED RICE" img={drfriedrice} noitems={noitems} incrementCount={incrementCount} decrementCount={decrementCount} crange='5'/>
                    <Card name="CURD RICE" img={drcurdri} noitems={noitems} incrementCount={incrementCount} decrementCount={decrementCount} crange='5'/>
                    <Card name="PAROTTA" img={drparotta} noitems={noitems} incrementCount={incrementCount} decrementCount={decrementCount} crange='5'/>
                    <Card name="PULAO" img={drpulao} noitems={noitems} incrementCount={incrementCount} decrementCount={decrementCount} crange='5'/>
                    <Card name="KOOTU" img={drkootu} noitems={noitems} incrementCount={incrementCount} decrementCount={decrementCount} crange='5'/>

                </div>
            </div>
            <div className="lunch1-footer">
                <button>SUBMIT</button>
            </div>
            <div>
                
            </div>
        </div>
    )
}