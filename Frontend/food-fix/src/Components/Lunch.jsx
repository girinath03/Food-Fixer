import Luffy from '../Images/lunch.webp';  
import '../Css/Lunch.css';
import { useNavigate } from 'react-router-dom';

export default function Lunch()
{
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/lunch1');
    }
    return(
        <div id='lu-bdy' onClick={handleClick} className='lunch'>
            <div id='lu-img'>
                <img src={Luffy} alt="" />
            </div>
            <div id='lu-head'>
                <span>LUNCH</span>
            </div>
        </div>
        )
}