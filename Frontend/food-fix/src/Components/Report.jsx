import Luffy from '../Images/report.avif';  
import { useNavigate } from 'react-router-dom';
import '../Css/Report.css';

export default function Report()
{
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/report1');
    }

    return(
        <div id='rp-bdy' onClick={handleClick} className='report'>
            <div id='rp-img'>
                <img src={Luffy} alt="" />
            </div>
            <div id='rp-head'>
                <span>REPORT</span>
            </div>
        </div>
    )
}