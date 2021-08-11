import { useState, createContext } from "react";

export const SettingsContext = createContext();

const SettingsContextProvider = (props) => {
  const POMODORO_TIMER = {
    WORK: 0.05,
    BREAK: 0.05,
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
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;

    return pomodorosFinished;
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
