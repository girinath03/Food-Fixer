import Luffy from '../Images/Luffy.jpeg'
import '../Css/Profile.css'
import Cartt from '../Images/cart.png';
import { useState } from 'react';
import Cart from './Cart';
import { FaArrowLeft } from 'react-icons/fa';

export default function Profile() {
    const [cart, setCart] = useState(false);
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
            </div>
            <div>
                <FaArrowLeft className='back-arrow'/>
            </div>

            {   cart && <Cart onClose={()=>setCart(false)}/>    }
        </div>
    )
}