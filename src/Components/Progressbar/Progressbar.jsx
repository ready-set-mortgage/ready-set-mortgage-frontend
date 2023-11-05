import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

// eslint-disable-next-line react/prop-types
export default function Progressbar({ value }) {

  const color = value > 74 ? "#A3BE8C" : value > 59 ? "#EBCB8B" : "#BF616A";

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
