import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link> |{" "}
      <Link to="/contact">Contact</Link> |{" "}
      <Link to="/education">Education</Link> |{" "}
      <Link to="/skills">Skills</Link> |{" "}
      <Link to="/weather">Weather</Link>
    </nav>
  );
}

export default Navbar;