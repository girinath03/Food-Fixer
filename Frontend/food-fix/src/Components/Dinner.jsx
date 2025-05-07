import dinner from '../Images/dinner.jpg';  
import '../Css/Dinner.css';
import { useNavigate } from 'react-router-dom';

export default function Dinner()
{
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/dinner1');
    }
    return(
        <div id='di-bdy' onClick={handleClick} className='dinner'>
            <div id='di-img'>
                <img src={dinner} alt="" />
            </div>
            <div id='di-head'>
                <span>DINNER</span>
            </div>
        </div>
        )
}