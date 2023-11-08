import React from "react";
import Counter from "./counter";

const Counters = ({ onReset, counters, onDelete, onIncrement }) => {
  console.log("counters-rendered");
  return (
    <div>
      <button
        type="button"
        className="btn btn-outline-primary btn-lg m-2"
        onClick={onReset}
      >
        Reset
      </button>
      {counters.map((counter) => (
        <Counter
          key={counter.id}
          counter={counter}
          onIncrement={onIncrement}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default Counters;
