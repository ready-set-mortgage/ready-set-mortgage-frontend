import { Link } from "react-router-dom";
import house from "../../Assets/house.jpg"
import "./Landing.css";

export default function Landing() {
  return (
    <div className="landing">
      <img className="landing-image" src={house} />
      <h1>Ready, Set, Mortgage</h1>
      <h3>Know where you're headed.</h3>
      <br/>
      <h5>Preparing for home ownership can be a scary prospect. With so many different numbers to consider, it can be hard to understand whether you're ready to take out a mortgage or not.</h5>
      <h5>Let us help. To assess whether you're ready for home ownership, just click the "Assess My Readiness!" button below, fill in a few numbers about yourself, and we'll generate a report for you detailing whether you're ready for home ownership, where you could improve, and include some personalized AI suggestions!</h5>
      <br></br>
      <Link to="/apply"><button>Assess My Readiness!</button></Link>
    </div>
  )
}
