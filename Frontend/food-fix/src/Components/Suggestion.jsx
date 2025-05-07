import Luffy from '../Images/suggestion.jpg'; 
import { useNavigate } from 'react-router-dom';
import '../Css/Suggestion.css';

export default function Suggestion() {

    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/suggestion1');
    }

    return(
        <div className="suggestion" id="sgg-bdy" onClick={handleClick}>
            <div id='sgg-img'>
                <img src={Luffy} alt="" />
            </div>
            <div id='sgg-head'>
                <span>SUGGESTION</span>
            </div>
        </div>
    )
}