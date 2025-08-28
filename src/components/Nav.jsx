import { Routes, Route, Link } from "react-router-dom";

function Nav() {
    return (
      <div className="navbar">
        <ul className="nav-links">
          <li><Link to="/" className="nav-link">Home</Link></li>
          <li><Link to="/About" className="nav-link">About</Link></li>
          <li><Link to="/Portfolio" className="nav-link">Portfolio</Link></li>
          <li><Link to="/Contact" className="nav-link">Contact</Link></li>
        </ul>
      </div>
    );
  }
  
  export default Nav;