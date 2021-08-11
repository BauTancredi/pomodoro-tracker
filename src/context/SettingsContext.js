import { useState, createContext } from "react";

export const SettingsContext = createContext();

const SettingsContextProvider = (props) => {
  const pomodoroTimer = {
    work: 0.1,
    break: 0.1,
  };
  const [pomodoro, setPomodoro] = useState(pomodoroTimer.work);
  const [startAnimate, setStartAnimate] = useState(false);
  const [key, setKey] = useState(0);
  const [isWorkTimer, setIsWorkTimer] = useState(true);
  const [pomodorosFinished, setPomodorosFinished] = useState(0);

  function startTimer() {
    setStartAnimate(true);
  }

  function pauseTimer() {
    setStartAnimate(false);
  }

  function stopAimate() {
    setStartAnimate(false);
  }

  function setCurrentTimer(executing) {
    setTimerTime(executing);
  }

  const setTimerTime = (evaluate) => {
    switch (evaluate) {
      case "work":
        setPomodoro(pomodoroTimer.work);
        break;
      case "break":
        setPomodoro(pomodoroTimer.break);
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
      }}
    >
      {props.children}
    </SettingsContext.Provider>
  );
};

export default SettingsContextProvider;
