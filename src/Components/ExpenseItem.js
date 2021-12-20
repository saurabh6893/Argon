import Img from "./Img";
import "./ExpenseItem.css";
import Dates from "./Dates";

function ExpenseItem(props) {
  return (
    <>
      <h2>ARGON</h2>
      <p>
        This is a PC that Brings Together Power and Productivity together,
        available for Budget and Advanced needs.
      </p>
      <span className="dbv">{props.model}</span>
      <span className="hdr">{props.procs}</span>
      <span className="xxy">{props.ramz}</span>
      <br />
      <Img />
      <br />
      <Dates tym={props.tym} />
    </>
  );
}

export default ExpenseItem;
