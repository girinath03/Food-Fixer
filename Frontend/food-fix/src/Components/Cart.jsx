import '../Css/Cart.css';
import Showcard from './Showcard';
import image from '../Images/lunch.webp';

export default function Cart({onClose}) {
    const cartItems = [
        { name: "RICE", img: image, time: 'Morning', range: '1' },
        { name: "CURRY", img: image, time: 'Afternoon' },
        { name: "DAL", img: image, time: 'Night' },
        { name: "RAITA", img: image, time: 'Morning' },
        { name: "CURRY", img: image, time: 'Afternoon' },
        { name: "DAL", img: image, time: 'Night' },
        { name: "RAITA", img: image, time: 'Morning' },
        { name: "CURRY", img: image, time: 'Afternoon' },
        { name: "DAL", img: image, time: 'Night' },
        { name: "RAITA", img: image, time: 'Morning' },
        { name: "CURRY", img: image, time: 'Afternoon' },
        { name: "DAL", img: image, time: 'Night' },
        { name: "RAITA", img: image, time: 'Morning' },
        { name: "CURRY", img: image, time: 'Afternoon' },
        { name: "DAL", img: image, time: 'Night' },
        { name: "RAITA", img: image, time: 'Morning' },
        { name: "CURRY", img: image, time: 'Afternoon' },
        { name: "DAL", img: image, time: 'Night' },
        { name: "RAITA", img: image, time: 'Morning' }
    ];
    return(
        <div className="overlay" onClick={onClose}>
            <div className="cart-popup" onClick={(e) => e.stopPropagation()}>
                <button className="close-btn" onClick={onClose}>✖</button>
                <h2>Your Cart</h2>
                <div className='cart-items'>
                    <Showcard items={cartItems}/>
                </div>
            </div>
        </div>
    )
}