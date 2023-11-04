import { CircularProgressbar, buildStyles } from "react-circular-progressbar"

export default function Dashboard() {
  return (
    <div className="dashboard">
      <div style={{ width: 150, height: 150 }}>
        <CircularProgressbar
          value={70}
          text="70"
          styles={buildStyles({
            pathColor: "#770ef8",
            textColor: "#770ef8",
          })}
        />
      </div>
      <div style={{ width: 150, height: 150 }}>
        <CircularProgressbar
          value={70}
          text="70"
          styles={buildStyles({
            pathColor: "#770ef8",
            textColor: "#770ef8",
          })}
        />
      </div>
      <div style={{ width: 150, height: 150 }}>
        <CircularProgressbar
          value={70}
          text="70"
          styles={buildStyles({
            pathColor: "#770ef8",
            textColor: "#770ef8",
          })}
        />
      </div>
    </div>
  )
}
