import React from "react";
import "./Task.css";

const Task = (props) => {
  const style = {
    color: "red",
  };

  // destructuring
  const { text, date, id, active, important, finishDate } = props.task;

  if (active) {
    return (
      <div>
        <p>
          <strong style={important ? style : null}>{text}</strong> - do
          <span> {date} </span>
          <button className='accept' onClick={() => props.change(id)}>
            Zostało zrobione
          </button>
          <button className='cancel' onClick={() => props.delete(id)}>
            X
          </button>
        </p>
      </div>
    );
  } else {
    const timeFinish = new Date(finishDate).toLocaleDateString();
    return (
      <div>
        <p>
          <strong>{text}</strong> <span>(zrobić do {date}) </span>
          <br />
          -potwierdzenie wykonania <span>{timeFinish} </span>
          <button style={{ color: "red" }} onClick={() => props.delete(id)}>
            X
          </button>
        </p>
      </div>
    );
  }
};

export default Task;
