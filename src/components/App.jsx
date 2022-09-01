import React, { useState } from "react";
import List from "./List";
function App() {
  let [value, setValue] = useState(""); //hook to get input value
  let [arr, push] = useState([]); //hook of array to create dynamic lists
  //Getting value from input tag
  const data = (event) => {
    const val = event.target.value;
    setValue(val);
  };
  //Adding notes using list
  const note = (event) => {
    push((previous) => {
      return [...previous, value];
    });
    setValue(""); //Clearing input section
  };
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={data} value={value} />
        <button onClick={note}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {arr.map((todo) => {
            return <List text={todo}></List>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
