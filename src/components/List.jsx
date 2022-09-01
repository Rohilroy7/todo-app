import React, { useState } from "react";
const style = {
  textDecoration: "line-through"
};
const nostyle = {
  textDecoration: "none"
};

const List = (props) => {
  let [done, setdone] = useState(false);
  const check = () => {
    setdone((prev) => {
      return !prev;
    });
  };
  return (
    <li onClick={check} style={done ? style : nostyle}>
      {props.text}
    </li>
  );
};
export default List;
