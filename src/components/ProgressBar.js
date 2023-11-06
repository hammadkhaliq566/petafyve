import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import Counter from "./Counter";

const ProgressBar = ({ value, color, extraCls, emptyFill, withoutCounter }) => {
  return (
    <div
      className={`chart-circle ${extraCls ? extraCls : "one"}`}
      style={{ width: 130, height: 130 }}
    >
      <CircularProgressbar
        width={130}
        value={value}
        strokeWidth={6}
        styles={buildStyles({
          pathColor: color,
          trailColor: emptyFill ? emptyFill : "#000",
        })}
      />{" "}
      {withoutCounter ? (
        <span className="h2">
          {value}
          <span>%</span>
        </span>
      ) : (
        <span className="h2">
          <Counter end={value} />
          <span>%</span>
        </span>
      )}
    </div>
  );
};
export default ProgressBar;
