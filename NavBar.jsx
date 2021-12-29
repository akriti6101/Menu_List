import { NavLink } from "react-router-dom";

function NavBar()
{
    return (<>
          <NavLink  className="breakfast" exact to="/breakfast"><button>Breakfast</button></NavLink>
          <NavLink className="navlink" exact to="/lunch"><button>Lunch</button></NavLink>
          <NavLink  className="navlink" exact to="/evening"><button>Evening</button></NavLink>
          <NavLink  className="navlink" exact to="/dinner"><button>Dinner</button></NavLink>
          <NavLink className="navlink" exact to="/"><button>All</button></NavLink>

    </>);

}
export default NavBar;