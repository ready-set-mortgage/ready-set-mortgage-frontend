import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "./Dashboard.css"

export default function Dashboard() {
  return (
    <div className="dashboard">
      <div style={{ width: 150, height: 150 }}>
        <CircularProgressbar
          value={55}
          text="55"
          styles={buildStyles({
            pathColor: "#f80e1a",
            textColor: "#f80e1a",
          })}
        />
      </div>
      <div style={{ width: 150, height: 150 }}>
        <CircularProgressbar
          value={70}
          text="70"
          styles={buildStyles({
            pathColor: "#f8ec0e",
            textColor: "#f8ec0e",
          })}
        />
      </div>
      <div style={{ width: 150, height: 150 }}>
        <CircularProgressbar
          value={85}
          text="85"
          styles={buildStyles({
            pathColor: "#1af80e",
            textColor: "#1af80e",
          })}
        />
      </div>
    </div>
  )
}
