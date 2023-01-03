import { NavLink } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav>
      <NavLink to="/">click to go home</NavLink>
      <NavLink to="/about">click to go about</NavLink>
    </nav>
  );
};

export default Navbar;
