// import Breakfast from "../Breakfast";
// import Commonfood from "../Commonfood";
// import Dinner from "../Dinner";
// import Drinks from "../Drinks";
// import Foodrs from "../Foodrs";
// import Lunch from "../Lunch";
// import Report from "../Report";
import Profile from "../Profile";
// import Snacks from "../Snacks";
// import Spcldish from "../Spcldish";
// import Suggestion from "../Suggestion";
import Foodaccess from "../Admin/Foodaccess";
import '../../Css/Admin/Mmenuadmin.css';
import Queries from "./Queries";

export default function Mmenuadmin()
{
    return(
        <div className="adminmenu" id="ad-menu">
            <div>
                <Profile />
            </div>
            <div>
                <div id="ad-menuhead">ADMIN MENU</div>
                <div id="mmenu-bbdy">
                    <div id="mmenu-bdy">
                        <div id="mmenu-br" className="mmenu-div"><Foodaccess /></div>
                         {/* <div id="mmenu-br" className="mmenu-div"><Breakfast/></div> */}
                         <div id="mmenu-br" className="mmenu-div"><Queries /></div>
                        {/*<div id="mmenu-lu" className="mmenu-div"><Lunch /></div>
                        <div id="mmenu-di" className="mmenu-div"><Dinner/></div>
                        <div id="mmenu-sn" className="mmenu-div"><Snacks/></div>
                        <div id="mmenu-dr" className="mmenu-div"><Drinks/></div>
                        <div id='memenu-sg' className="mmenu-div"><Suggestion /></div>
                        <div id="mmenu-rp" className="mmenu-div"><Report /></div>
                        <div id="mmenu-cm" className="mmenu-div"><Commonfood/></div>
                        <div id="mmenu-rs" className="mmenu-div"><Foodrs/></div>
                        <div id="mmenu-spclds" className="mmenu-div"><Spcldish /></div> */}
                    </div>
                </div>
                <div>
                    <div id="mmenu-submit">
                        <span>Submit</span>  
                    </div>
                </div>
            </div>
        </div>
    )
}