import React from "react";

export default function Container(props) {
  return (
    <div
      className={`container p-4 md:p-8 mx-auto xl:px-0 ${
        props.className ? props.className : ""
      }`}
      id={props.id}
    >
      {props.children}
    </div>
  );
}
