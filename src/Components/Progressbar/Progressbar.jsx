import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

// eslint-disable-next-line react/prop-types
export default function Progressbar({ value }) {

  const color = value > 74 ? "#1af80e" : value > 59 ? "#f8ec0e" : "#f80e1a";

  return (
    <div style={{ width: 150, height: 150 }}>
      <CircularProgressbar
        value={value}
        text={`${value}`}
        styles={buildStyles({
          pathColor: color,
          textColor: color,
        })}
      />
    </div>
  )
}
