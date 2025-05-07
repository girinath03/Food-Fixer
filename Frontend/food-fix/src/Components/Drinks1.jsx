import Card from "./Card";
import teaImg from '../Images/Tea.webp';
import coffeeImg from '../Images/coffee.jpg';
import lemonTeaImg from '../Images/lemontea.jpg';
import sodaImg from '../Images/soda.jpg';
import pannerImg from '../Images/pannersoda.jpeg';
import milkshakesImg from '../Images/milkshake.jpg';
import fruitJuiceImg from '../Images/fruitjuice.jpeg';
import sarbathImg from '../Images/sarbath.jpg';
import milkimg from '../Images/milk.jpg'

import { useState } from "react";
import '../Css/Drinks1.css';            
import Profile from "./Profile";


export default function Drinks1()
{
    const [noitems,setNoitems]=useState(0);
    const incrementCount = () =>
        {
            if(noitems<2)
            {
                setNoitems(noitems+1);
            }
            else{
                alert("you can only select 2 items.");
            }
        }
        const decrementCount = () => {
            if (noitems > 0) {
                setNoitems(noitems - 1);
            }
        };

    return(
        <div className="drinks1">
             <div>
                <Profile />
            </div>
            <div className="drinks1-header">
                <span>DRINKS ITEMS</span>
            </div>
            <div className="drinks1-bdy">
                <div className="card-container">
                    <Card name="TEA" img={teaImg} choice='*' />
                    <Card name="COFFEE" img={coffeeImg} choice='*' />
                    <Card name="Milk" img={milkimg}  choice='*' />
                    <Card name="LEMON TEA" img={lemonTeaImg} crange='2'  noitems={noitems} incrementCount={incrementCount} decrementCount={decrementCount}/>
                    <Card name="SODA" img={sodaImg} crange='2' noitems={noitems} incrementCount={incrementCount} decrementCount={decrementCount}/>
                    <Card name="PANNER" img={pannerImg} crange='2' noitems={noitems} incrementCount={incrementCount} decrementCount={decrementCount}/>
                    <Card name="MILKSHAKES" img={milkshakesImg} crange='2' noitems={noitems} incrementCount={incrementCount} decrementCount={decrementCount}/>
                    <Card name="FRUIT JUICE" img={fruitJuiceImg} crange='2' noitems={noitems} incrementCount={incrementCount} decrementCount={decrementCount}/>
                    <Card name="SARBATH" img={sarbathImg} crange='2' noitems={noitems} incrementCount={incrementCount} decrementCount={decrementCount}/>
                </div>
            </div>
            <div className="drinks1-footer">
                <button>SUBMIT</button>
            </div>
            <div></div>
        </div>
    )
}