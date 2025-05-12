import React from 'react';
import '../Css/Spcldish1.css';
import Profile from './Profile';
import biriyani from '../Images/poha.jpeg';
import Card from './Card';

export default function Spcldish1() {
    return(
        <div className='spcldish1'>
            <div>
                <Profile />
            </div>
            <div className='spcldish1-body'>
                <div className='spcldish1-header'>
                    <span>SPECIAL DISH</span><br/>
                    <span>RAMZAN SPECIAL</span>
                </div>
                <div className='card-container'>
                    <Card name="BIRYANI" img={biriyani} />
                    <Card name="MUTTON GRAVY" img={biriyani} />
                    <Card name="FISH FRY" img={biriyani} />
                    <Card name="CHILLY 🐓" img={biriyani} />
                </div>
            </div>
            <div className="spcldish1-footer">
                <button>SUBMIT</button>
            </div>
        </div>
    )
}
