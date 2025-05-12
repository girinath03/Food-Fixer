import '../Css/Spcldish.css';
import spcldish from '../Images/spcldish.jpg';
import { useNavigate } from 'react-router-dom';

export default function Spcldish() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/spcldish1');
    }
    return (
        <div className="spcldish" id="spcldish-bdy" onClick={handleClick}>
            <div id='spcldish-img'>
                <img src={spcldish} alt="" />
            </div>
            <div id='spcldish-head'>
                <span>SPECIAL DISH</span>
            </div>
        </div>
    );
}