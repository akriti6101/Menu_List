import { Routes,Route } from "react-router-dom";
import Breakfast from "./Source";
import {Lunch,Evening,Dinner,All} from './Source';
import NavBar from "./NavBar";
function App()
{
     return (<>
     <h2><span> 🥘</span> Order Your Favourite Dish<span> 🥘</span></h2><hr/>
     <NavBar/><br/>
          <Routes>
              <Route path="/breakfast" element={<Breakfast/>}>Breakfast</Route>
              <Route path="/lunch" element={<Lunch/>}>Lunch</Route>
              <Route path="/evening" element={<Evening/>}>Evening</Route>
              <Route path="/dinner" element={<Dinner/>}>Dinner</Route>
              <Route path="/" element={<All/>}>All</Route>
          </Routes>
     </>);
}
export default App;