import React, { useContext } from "react";
import Button from "./components/Button/Button";
import CountdownAnimation from "./components/CountdownAnimation/CountdownAnimation";
import { SettingsContext } from "./context/SettingsContext";

const App = () => {
  const {
    pomodoro,
    startAnimate,
    children,
    startTimer,
    pauseTimer,
    setCurrentTimer,
    key,
    setKey,
    isWorkTimer,
    setIsWorkTimer,
    hasFinished,
  } = useContext(SettingsContext);

  const handleStartButtonTitle = () => {
    return isWorkTimer ? "Start Pomodoro" : "Start Break";
  };

  const handleStartButtonCallback = () => {
    const currentTimer = isWorkTimer ? "work" : "break";

    setCurrentTimer(currentTimer);
    setIsWorkTimer(!isWorkTimer);
    setKey((prevKey) => prevKey + 1);
    !startAnimate && startTimer();
  };

  const handlePauseButtonTitle = () => {
    if (startAnimate || (!startAnimate && hasFinished)) {
      return "Pause";
    } else {
      return "Resume";
    }
  };

  const handlePauseButtonCallback = () => {
    if (startAnimate) {
      return pauseTimer();
    } else {
      return startTimer();
    }
  };

  const handleDisabled = () => {
    return hasFinished ? true : false;
  };

  return (
    <div>
      <CountdownAnimation
        resetKey={key}
        timer={pomodoro}
        animate={startAnimate}
      >
        {children}
      </CountdownAnimation>

      <Button
        title={handleStartButtonTitle()}
        activeClass={!startAnimate ? "active" : undefined}
        _callback={() => handleStartButtonCallback()}
      />

      <Button
        title={handlePauseButtonTitle()}
        activeClass={startAnimate ? "active" : undefined}
        _callback={() => handlePauseButtonCallback()}
        isDisabled={handleDisabled()}
      />
    </div>
  );
};

export default App;
