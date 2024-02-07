import React, { useState } from "react";
import "./App.css";

function App() {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  const startTimer = () => {
    setIsActive(true);
    const id = setInterval(() => {
      setTime((prevTime) => prevTime + 0.01);
    }, 10);
    setIntervalId(id);
  };

  const pauseContinueTimer = () => {
    setIsActive((prevIsActive) => !prevIsActive);
    if (isActive) {
      clearInterval(intervalId);
    } else {
      startTimer();
    }
  };

  const stopTimer = () => {
    clearInterval(intervalId);
    setIsActive(false);
    setTime(0);
  };

  const formatTime = (time) => {
    return time.toFixed(2);
  };

  return (
    <div className="container">
      <div className="timer-text">Time:</div>
      <div className="timer">{formatTime(time)} s</div>
      <div className="button-container">
        <button
          onClick={startTimer}
          className={`btn ${isActive && "disabled"}`}
          disabled={isActive || time > 0}
        >
          Start
        </button>
        <button onClick={pauseContinueTimer} className="btn">
          {isActive ? "Pause" : "Continue"}
        </button>
        <button onClick={stopTimer} className="btn">
          Stop
        </button>
      </div>
    </div>
  );
}

export default App;
