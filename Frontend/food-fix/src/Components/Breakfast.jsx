import Luffy from '../Images/Luffy.jpeg';  
import '../Css/Breakfast.css';
import { useNavigate } from 'react-router-dom';

export default function Breakfast()
{
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/breakfast1');
    }

    return(
        <div id='br-bdy' onClick={handleClick} className='breakfast'>
            <div id='br-img'>
                <img src={Luffy} alt="" />
            </div>
            <div id='br-head'>
                <span>BREAKFAST</span>
            </div>
        </div>
    )
}