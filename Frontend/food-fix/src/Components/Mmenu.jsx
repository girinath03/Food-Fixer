import Profile from "./Profile";
import '../Css/Mmenu.css';
import Breakfast from "./Breakfast";
import Lunch from "./Lunch";
import Dinner from "./Dinner";
import Snacks from "./Snacks";
import Drinks from "./Drinks";
import Report from "./Report";
import Suggestion from "./Suggestion";
import Commonfood from "./Commonfood";
import Foodrs from "./Foodrs";
import Spcldish from "./Spcldish";

export default function Mmenu() {
    return(
        <div className="mmenu" id="mmenu-mbdy">
            <div>
                <Profile />
            </div>
            <div id="mmenu-bbdy">
                <div id="mmenu-bdy">
                    <div id="mmenu-br" className="mmenu-div"><Breakfast/></div>
                    <div id="mmenu-lu" className="mmenu-div"><Lunch /></div>
                    <div id="mmenu-di" className="mmenu-div"><Dinner/></div>
                    <div id="mmenu-sn" className="mmenu-div"><Snacks/></div>
                    <div id="mmenu-dr" className="mmenu-div"><Drinks/></div>
                    <div id='memenu-sg' className="mmenu-div"><Suggestion /></div>
                    <div id="mmenu-rp" className="mmenu-div"><Report/></div>
                    <div id="mmenu-cm" className="mmenu-div"><Commonfood/></div>
                    <div id="mmenu-rs" className="mmenu-div"><Foodrs/></div>
                    <div id="mmenu-spclds" className="mmenu-div"><Spcldish /></div>
                </div>
            </div>
            <div id="mmenu-submit">
                <span>Submit</span>  
            </div>
        </div>
    )
}
