import { Link } from "react-router-dom";
import logo from "../../Assets/logo.svg";
import "./Navbar.css"

export default function Navbar() {
  return (
    <nav>
      <Link to="/"><div className="navbar-logo"><img className="navbar-icon" src={logo} alt="rocket icon" /><h2>Ready, set, mortgage!</h2></div></Link>
      <Link to="/dashboard">Dashboard</Link>
    </nav>
  )
}
