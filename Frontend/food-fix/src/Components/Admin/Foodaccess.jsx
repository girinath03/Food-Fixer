import Luffy from '../../Images/breakfast.jpg';  
import { useNavigate } from 'react-router-dom';
import '../../Css/Admin/Foodaccess.css';

export default function Foodaccess() {

    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/foodaccess1');
    }

    return(
        <div id='fac-bdy' className="foodaccess"  onClick={handleClick}>
            <div id='fac-img'>
                <img src={Luffy} alt="" />
            </div>
            <div id='fac-head'>
                <span>FOODACCESS</span>
            </div>
        </div>
    )
}

