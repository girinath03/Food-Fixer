import Card from "./Card";
import Profile from "./Profile";
import '../Css/Breakfast1.css';
import bridly from '../Images/idly.jpg';
import brdosa from '../Images/dosa.jpg';
import brpongal from '../Images/pongal.jpg';
import brupma from '../Images/upma.jpg';
import brpoha from '../Images/poha.jpeg';
import brvada from '../Images/vada.jpeg';
import brpoori from '../Images/poori.jpg';
import brchapathi from '../Images/chapathi.jpeg';
import brappam from '../Images/appam.jpeg';
import { useState } from "react";
import axios from "axios";


export default function Breakfast1()
{

    const [britems, setBritems] = useState({
        name: "",
        img: "",
    });
    const handlebrsubmit = async (e) => {
        setBritems({ ...britems, [e.target.name]: e.target.value });
    }

    const handlefsubmit = async (e) => {
        e.preventDefault();
        // try{
            const res = await axios.post("http://localhost:8080/api/breakfast1", {
                breakfast_name: britems.name,
                breakfast_img: britems.img,
            });
            alert(res.data);
        // }
        // catch (error) {
        //     console.error("Error submitting breakfast data:", error);
        //     alert(error);
        // }
    }
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
        <div className="breakfast1" >
            <div>
                <Profile/>
            </div>
            <div className="breakfast1-body">
                <div className="breakfast1-header">
                    <span>BREAKFAST ITEMS</span>
                </div>
                <div className="card-container">
                    <Card name="IDLY" img={bridly} noitems={noitems} incrementCount={incrementCount} decrementCount={decrementCount} onChange={handlebrsubmit} range='10'/>
                    <Card name="MASAL DOSA" img={brdosa} noitems={noitems} incrementCount={incrementCount} decrementCount={decrementCount} onChange={handlebrsubmit} />
                    <Card name="PONGAL" img={brpongal} noitems={noitems} incrementCount={incrementCount} decrementCount={decrementCount} onChange={handlebrsubmit} />
                    <Card name="UPMA" img={brupma} noitems={noitems} incrementCount={incrementCount} decrementCount={decrementCount} onChange={handlebrsubmit} />
                    <Card name="POHA" img={brpoha} noitems={noitems} incrementCount={incrementCount} decrementCount={decrementCount} onChange={handlebrsubmit} />
                    <Card name="VADA" img={brvada} noitems={noitems} incrementCount={incrementCount} decrementCount={decrementCount} onChange={handlebrsubmit} />
                    <Card name="POORI" img={brpoori} noitems={noitems} incrementCount={incrementCount} decrementCount={decrementCount} onChange={handlebrsubmit} />
                    <Card name="CHAPPATHI" img={brchapathi} noitems={noitems} incrementCount={incrementCount} decrementCount={decrementCount} onChange={handlebrsubmit} />
                    <Card name="APPAM" img={brappam} noitems={noitems} incrementCount={incrementCount} decrementCount={decrementCount} onChange={handlebrsubmit} />
                </div>
            </div>
            <div className="breakfast1-footer" onClick={handlefsubmit}>
                <button>SUBMIT</button>
            </div>
        </div>
    )
}