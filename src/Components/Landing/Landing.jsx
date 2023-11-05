import house from "../../Assets/house.jpg"
import "./Landing.css";

export default function Landing() {
  return (
    <div className="landing">
      <img className="landing-image" src={house} />
      <h2>Buy a home without the complications!</h2>
      <h5>We guide you through the quickest application for buying a home.</h5>
      <h5>Receive an immediate response along with our AI powered feedback.</h5>
      <br></br>
      <button>Apply Now</button>
    </div>
  )
}
