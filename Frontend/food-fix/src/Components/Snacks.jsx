import Luffy from '../Images/snacks.jpg';  
import '../Css/Snacks.css';
import { useNavigate } from 'react-router-dom';



export default function Snacks() {
    const navigate = useNavigate();
    const handleClick= () => {
        navigate('/snacks1');
    }
    return(
        <div className="snacks" id="sn-mbdy" onClick={handleClick}>
            <div id='sn-img'>
                <img src={Luffy} alt="" />
            </div>
            <div id='sn-head'>
                <span>SNACKS</span>
            </div>
        </div>
    )
}