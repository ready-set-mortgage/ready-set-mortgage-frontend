import { Link } from "react-router-dom";
import house from "../../Assets/house.jpg"
import "./Landing.css";

export default function Landing() {
  return (
    <div className="landing">
      <img className="landing-image" src={house} />
      <h2>Buy a home without the complications!</h2>
      <h5>We guide you through a quick assessment to see if you qualify for your mortgage.</h5>
      <h5>You receive an immediate response along with our AI powered feedback.</h5>
      <br></br>
      <Link to="/apply"><button>Assess Eligibility</button></Link>
    </div>
  )
}
