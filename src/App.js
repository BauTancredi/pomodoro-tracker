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
  } = useContext(SettingsContext);

  return (
    <div>
      <CountdownAnimation
        resetKey={key}
        timer={pomodoro}
        animate={startAnimate}
      >
        {children}
      </CountdownAnimation>
      {isWorkTimer ? (
        <Button
          title={"Start Pomodoro"}
          activeClass={!startAnimate ? "active" : undefined}
          _callback={() => {
            setCurrentTimer("work");
            setIsWorkTimer(!isWorkTimer);
            setKey((prevKey) => prevKey + 1);
            startTimer();
          }}
        />
      ) : (
        <Button
          title={"Start Break"}
          activeClass={!startAnimate ? "active" : undefined}
          _callback={() => {
            setCurrentTimer("break");
            setIsWorkTimer(!isWorkTimer);
            setKey((prevKey) => prevKey + 1);
            startTimer();
          }}
        />
      )}

      <Button
        title="Pause"
        activeClass={startAnimate ? "active" : undefined}
        _callback={pauseTimer}
      />
    </div>
  );
};

export default App;
