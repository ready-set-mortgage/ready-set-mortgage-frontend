import Progressbar from "../Progressbar/Progressbar";
import "./Dashboard.css";

const values = [55, 60, 75, 80, 45, 90, 70, 40, 50];
const progressbars = values.map(value => <Progressbar key={value * Math.random()} value={value}/>)


export default function Dashboard() {
  return (
    <div className="dashboard">
      {progressbars}
    </div>
  )
}
