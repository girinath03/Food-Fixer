import '../Css/Foodrs.css';
import foodfix from '../Images/Order.jpg'
import { useNavigate } from 'react-router-dom';


export default function Foodrs() {
    const navigate = useNavigate(); 
    const handleClick = () => {
        // Handle the click event here, e.g., navigate to another page or perform an action
        navigate('/foodrs1');
    };



    return (
        <div id='foodrs' onClick={handleClick} className='foodrs'>
            <div id='foodrs-bdy'>
                <div id='foodrs-img'>
                    <img src={foodfix} alt="" />
                <div id='foodrs-head'>ORDERS</div>
                </div>
            </div>
        </div>
    )
}