import { useState, createContext } from "react";

export const SettingsContext = createContext();

const SettingsContextProvider = (props) => {
  const POMODORO_TIMER = {
    WORK: 25,
    BREAK: 5,
  };

  const [pomodoro, setPomodoro] = useState(POMODORO_TIMER.WORK);
  const [startAnimate, setStartAnimate] = useState(false);
  const [hasFinished, setHasFinished] = useState(true);
  const [isWorkTimer, setIsWorkTimer] = useState(true);
  const [key, setKey] = useState(0);
  const [pomodorosFinished, setPomodorosFinished] = useState(0);

  function startTimer() {
    setStartAnimate(true);
    setHasFinished(false);
  }

  function pauseTimer() {
    setStartAnimate(false);
  }

  function stopAimate() {
    setStartAnimate(false);
    setHasFinished(true);
    isWorkTimer ? setIsWorkTimer(true) : setIsWorkTimer(false);
  }

  function setCurrentTimer(newTime) {
    setTimerTime(newTime);
  }

  const setTimerTime = (newTime) => {
    switch (newTime) {
      case "work":
        setPomodoro(POMODORO_TIMER.WORK);
        break;
      case "break":
        setPomodoro(POMODORO_TIMER.BREAK);
        break;
      default:
        setPomodoro(0);
        break;
    }
  };

  const children = ({ remainingTime }) => {
    let minutes = Math.floor(remainingTime / 60);
    let seconds = remainingTime % 60;

    if (minutes.toString().length < 2 || minutes === 0) {
      minutes = `0${minutes}`;
    }
    if (seconds.toString().length < 2 || seconds === 0) {
      seconds = `0${seconds}`;
    }

    return (
      <div className="timer">
        <div className="time-remaining">{`${minutes}:${seconds}`}</div>
        <div
          className={`pomodoros-finished ${pomodorosFinished > 0 && "show"}`}
        >
          {pomodorosFinished}x
        </div>
        <div
          className={`session-paused ${
            !hasFinished && !startAnimate && "show"
          }`}
        >
          Session paused
        </div>
      </div>
    );
  };

  return (
    <SettingsContext.Provider
      value={{
        pomodoro,
        startAnimate,
        startTimer,
        pauseTimer,
        children,
        setCurrentTimer,
        stopAimate,
        key,
        setKey,
        isWorkTimer,
        setIsWorkTimer,
        setPomodorosFinished,
        pomodorosFinished,
        hasFinished,
      }}
    >
      {props.children}
    </SettingsContext.Provider>
  );
};

export default SettingsContextProvider;
