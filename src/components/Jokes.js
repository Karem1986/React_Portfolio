import React from 'react'

export default function Jokes(props) {

  return (
    <div>
      <p style={{display: props.question ? "block" : "none"}}>Question: 
      {props.question}</p>
      {/* If there is no question, then the punchline's color changes to blue:  */}
      <p style={{color: !props.question ? "blue" : "none"}}> Answer: 
      {props.punchline}</p>
    </div>
  )
}