
import '../Css/Card.css';
import { useState } from 'react';
import unlimited from '../Images/unlimited.png'

export default function Card(props)
{
    const namee = props.name;
    const img1 = props.img;
    const choice = props.choice;
    const range = props.range;
    const day = props.day;
    const incrementCount = props.incrementCount;
    const decrementCount = props.decrementCount;
    const noitems = props.noitems;
    const suffix = props.suffix;
    // let crange = parseInt(props.crange);
    // console.log(crange);

    let crange = 0;
    if(props.crange === undefined)
    {
        crange = 10;
    } 
    else
    {
        crange =parseInt(props.crange);
    }
    const [count, setCount] = useState(0);

    const increment = () => 
    {
        if(noitems<crange)
        {
            setCount(count + 1);
            incrementCount();
        }
        else
        {
            alert(`You can select only ${crange} items at a time.`);
        }
        
    }
    const decrement = () => {
        if (count > 0) {
            setCount(count - 1);
            decrementCount();  // Notify parent to update selected items count
        }
        else{
            alert("your count is already 0");
        }
    };

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
                            <span>{range} {suffix}</span>
                        </div>

                    :
                    
                    choice === '*' ?
                        <div className='unlimited'>
                            <span><img src={unlimited} alt="" /> </span>
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