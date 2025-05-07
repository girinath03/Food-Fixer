import Luffy from '../Images/Luffy.jpeg'
import '../Css/Profile.css'
import Cartt from '../Images/cart.png';
import { useState } from 'react';
import Cart from './Cart';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function Profile() {
    const [cart, setCart] = useState(false);
    const navigate = useNavigate();
    const handleBack = () => {
        navigate(-1);
    };
    return(
        <div className="profile">
            <div id='profile-corner'>
                <img src={Luffy} alt="" />
                <span>Girinath</span>
            </div>

            <div className='cart'>
                <div className='cart-icon' onClick={()=>setCart(true)}>
                    <img src={Cartt} alt=""/>
                </div>
                <div>
                    <FaArrowLeft className='back-arrow'onClick={handleBack}/>
                </div>
            </div>

            {   cart && <Cart onClose={()=>setCart(false)}/>    }
        </div>
    )
}