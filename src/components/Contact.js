import React from "react";
export default function Contact(props) {
  return (
    <div className="about">
      <h3>{props.email}</h3>
      <h4>{props.linkedin}</h4>
      <h4>{props.nummer}</h4>
    </div>
  );
}
