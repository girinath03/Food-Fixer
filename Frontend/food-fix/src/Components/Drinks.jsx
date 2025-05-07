import Luffy from '../Images/Luffy.jpeg'; 
import { useNavigate } from 'react-router-dom';
import '../Css/Drinks.css';

export default function Drinks() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/drinks1');
    }
    return(
        <div className="drinks" onClick={handleClick} id='dr-bdy'>
            <div id='dr-img'>
                <img src={Luffy} alt="" />
            </div>
            <div id='dr-head'>
                <span>DRINKS</span>
            </div>
        </div>
    )
}