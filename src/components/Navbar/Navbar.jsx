import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">click to go home</Link>
      <Link to="/about">click to go about</Link>
    </nav>
  );
};

export default Navbar;
