import burger from '../Images/burger.png';
import '../Css/Suggestion1.css';
import Profile from './Profile';


export default function Suggestion1() {
    return(
        <div className="suggestion1" id="sgg1-mbdy">
           <div>
                <Profile />
           </div>
            <span id="sgg1-head">Give a Food Suggestion</span>
            
            <div id="sgg1-img">
                <img src={burger} alt="" />
            </div>
            
            <div id="sgg1-bdy">
                <div id='sgg1-name'>
                    <label htmlFor="">Food Name : </label>
                    <input type="text" placeholder="Food Name"/>
                </div>
                <div id='sgg1-type'>
                    <label htmlFor="">Food Type : </label>
                    <input type="text" placeholder="Food Type"/>
                </div>
                <div id='sgg1-timing'>
                    <label htmlFor="timing">Food Timing:</label>
                    <select name="timing" id="timing">
                        <option value="select">Select</option>
                        <option value="Morning">Morning</option>
                        <option value="Afternoon">Afternoon</option>
                        <option value="Afternoon">Evening</option>
                        <option value="Night">Night</option>
                    </select>
                </div>
                <div id='sgg1-foodimg'>
                    <label htmlFor="">Food Image : </label>
                    <input type="file" accept="image/*" />
                </div>
            </div>
            <div id="sgg1-submit">
                <button id="sgg1-submit">Submit</button>
            </div>
        </div>
    )
}
