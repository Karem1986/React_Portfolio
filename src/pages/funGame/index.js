import React, { useEffect, useState } from "react";
import "./index.css";

export default function Game() {
  const [startGame, setStartGame] = useState("");
  const [timeRemaining, setTimeRemaining] = useState(2);
  // to avoid time running infinitely after reaching 0
  const [isTimeRunning, setTimeRunning] = useState(false);
  const [wordCount, setWordCount] = useState(0);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setStartGame(evt.target.value);
  };
  // Calculate the word count
  function calculateWordCount(string) {
    const words = string.trim().split(" ");
    // filter empty strings to not get empty strings
    console.log("number of words", words);
    return words.filter((word) => word !== "").length;
  }
  // Start clock
  function startClock() {
    setTimeRunning(true);
    setTimeRemaining(5);
    setStartGame("");
  }
  useEffect(() => {
    if (isTimeRunning && timeRemaining > 0) {
      setTimeout(() => {
        setTimeRemaining((time) => time - 1);
      }, 1000);
    } else if (timeRemaining === 0) {
      setTimeRemaining(false);
      setWordCount(calculateWordCount(startGame));
    }
  }, [timeRemaining, isTimeRunning]);

  return (
    <div>
      {" "}
      <h1>How fast do you type? Hoe snel typ je? </h1>
      <h4>Be hooked...or Be squared! </h4>
      <textarea value={startGame} onChange={handleSubmit}></textarea>
      <h4>Resterende tijd {timeRemaining}</h4>
      <button onClick={startClock} disabled={isTimeRunning}>
        Aan de slag!
      </button>
      <h1>Aantal worden: {wordCount}</h1>
      <p>a game created with react hooks</p>
    </div>
  );
}
