import Profile from "./Profile";
import '../Css/Report1.css';

export default function Report1()
{
    return(
        <div className="report1">
            <div>
                <Profile/>
            </div>

            <div id="report1-head">
                <span>FOOD ISSUES</span>
            </div>

            <div id="report1-options">
                <label htmlFor="">SELECT THE FOOD ISSUES : </label>
                <select name="isuues" id="issues">
                    <option value="1">Select</option>
                    <option value="2">Food not available</option>
                    <option value="3">Food not fresh</option>
                    <option value="4">Food not tasty</option>
                    <option value="5">Food not healthy</option>
                    <option value="6">Food not served</option>
                </select>
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
            </div><br/>

            <div id="report1-proof">
                {/* Proof Image */}
                <label htmlFor="">Proof Image : </label>
                <input type="file" name="proof" id="proof" accept="image/*" />
            </div>

            <div id="report1-suggestion">
                {/* Suggestion for this report1 issues */}
                <label htmlFor="">Complaint : </label>
                <textarea name="suggestion" id="suggestion" cols="30" rows="10" placeholder="Issues description 120 words"></textarea>
            </div>

            <div id="report1-submits">
                <button id="report1-submit">Submit</button>
            </div>
        </div>
    )
}