import Card from "./Card";
import img2 from '../Images/Tea.webp';
import '../Css/Drinks1.css';            
import Profile from "./Profile";


export default function Drinks1()
{
    return(
        <div className="drinks1">
             <div>
                <Profile />
            </div>
            <div className="drinks1-header">
                <span>DRINKS ITEMS</span>
            </div>
            <div className="card-container">
                <Card name="TEA" img={img2} choice='*'/>
                <Card name="COFFEE" img={img2} choice='*'/>
                <Card name="LEMON TEA" img={img2} range='1' choice='0'/>
                <Card name="SODA" img={img2} range='1' choice='0'/>
                <Card name="PANNER" img={img2} range='1' choice='0'/>
                <Card name="MILKSHAKES" img={img2} range='1' choice='0'/>
                <Card name="FRUIT JUICE" img={img2} range='1' choice='0'/>
                <Card name="SARBATH" img={img2} range='1' choice='0'/>
             </div>
            <div className="drinks1-footer">
                <button>SUBMIT</button>
            </div>
            <div></div>
        </div>
    )
}