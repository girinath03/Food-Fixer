import './App.css';
import Login from './Components/Login';
import { Routes,Route } from 'react-router-dom';
import Mmenu from './Components/Mmenu';
import Profile from './Components/Profile';
import Breakfast from './Components/Breakfast';
import Lunch from './Components/Lunch';
import Dinner from './Components/Dinner';
import Breakfast1 from './Components/Breakfast1';
import Lunch1 from './Components/Lunch1';
import Dinner1 from './Components/Dinner1';
import Snacks1 from './Components/Snacks1';
import Drinks1 from './Components/Drinks1';
import Report1 from './Components/Report1';
import Suggestion1 from './Components/Suggestion1';
import Commonfood1 from './Components/Commonfood1';
import Foodrs1 from './Components/Foodrs1';
import Spcldish1 from './Components/Spcldish1';
// import Queries from './Components/Admin/Queries';
// import Foodaccess from './Components/Admin/Foodaccess';
import Foodaccess1 from './Components/Admin/Foodaccess1';
import Mmenuadmin from './Components/Admin/Mmenuadmin';
import Queries1 from './Components/Admin/Queries1';

function App() {
  return (
   <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/mmenu" element={<Mmenu />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/breakfast" element={<Breakfast />} />
        <Route path="/lunch" element={<Lunch />} />
        <Route path="/dinner" element={<Dinner />} />
        <Route path="/breakfast1" element={<Breakfast1 />} />
        <Route path='/lunch1' element={<Lunch1/>}></Route>
        <Route path='/dinner1' element={<Dinner1/>}></Route>
        <Route path='/snacks1' element={<Snacks1/>}></Route>
        <Route path='/drinks1' element={<Drinks1/>}></Route>
        <Route path='/report1' element={<Report1/>}></Route>
        <Route path='/suggestion1' element={<Suggestion1/>}></Route>
        <Route path='/commonfood1' element={<Commonfood1/>}></Route>
        <Route path='/foodrs1' element={<Foodrs1 />}></Route>
        <Route path='/spcldish1' element={<Spcldish1 />}></Route>
        <Route path='/adminmenu' element={<Mmenuadmin />} />
        <Route path='/adminqueries1' element={<Queries1 />} />
        <Route path='/foodaccess1' element={<Foodaccess1 />} />
      </Routes> 
   </>
  );
}

export default App;
