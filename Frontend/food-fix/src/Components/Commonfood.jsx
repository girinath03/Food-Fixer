import Luffy from '../Images/commonfood.jpg';  
import { useNavigate } from 'react-router-dom';
import '../Css/Commonfood.css';

export default function Commonfood()
{
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/commonfood1');
    }

    return(
        <div id='cm-bdy' onClick={handleClick} className='commonfood'>
            <div id='cm-img'>
                <img src={Luffy} alt="" />
            </div>
            <div id='cm-head'>
                <span>COMMON FOOD</span>
            </div>
        </div>
    )
}