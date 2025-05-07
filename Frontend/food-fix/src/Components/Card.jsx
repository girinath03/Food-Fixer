
import '../Css/Card.css';
import { useState } from 'react';

export default function Card(props)
{
    const namee = props.name;
    const img1 = props.img;
    const choice = props.choice;
    const day = props.day;

    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count > 0 ? count - 1 : 0);

    return(
        <div>
            <div className="card">
                <div className="card-header">
                    <h2>{namee}</h2>
                </div>
                <div className="card-img">
                    <img src={img1} alt="Dosa" className="card-image"/>
                </div>
                {
                    choice === '0' ?
                        <div className='card-day'>
                            <span>{day}</span>
                        </div>

                    :

                    <div className="card-controls">
                        <button onClick={decrement}>-</button>
                        <span>{count}</span>
                        <button onClick={increment}>+</button>
                    </div>
                }   
            </div>
        </div>
    )
}