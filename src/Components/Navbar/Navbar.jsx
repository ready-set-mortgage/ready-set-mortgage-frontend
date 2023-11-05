import { Link } from "react-router-dom";
import logo from "../../Assets/logo.png";
import "./Navbar.css"

export default function Navbar() {
  return (
    <nav>
      <Link to="/"><img className="navbar-logo" src={logo} alt="ReadySetMortgage logo" /></Link>
      <Link to="/dashboard">Dashboard</Link>
    </nav>
  )
}
