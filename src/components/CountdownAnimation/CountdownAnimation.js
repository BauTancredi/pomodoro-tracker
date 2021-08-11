import { useContext } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { SettingsContext } from "../../context/SettingsContext";

const CountdownAnimation = ({
  resetKey = 1,
  timer = 60,
  animate = true,
  children,
}) => {
  const {
    stopAimate,
    setPomodorosFinished,
    pomodorosFinished,
    isWorkTimer,
    hasFinished,
  } = useContext(SettingsContext);

  const colors =
    hasFinished || !isWorkTimer
      ? [
          ["#E046D7", 0.33],
          ["#E046D7", 0.33],
          ["#E046D7", 0.33],
        ]
      : [
          ["#3AB499", 0.33],
          ["#3AB499", 0.33],
          ["#3AB499", 0.33],
        ];

  const trailColor = hasFinished || !isWorkTimer ? "#801779" : "#13856b";

  return (
    <CountdownCircleTimer
      key={resetKey}
      isPlaying={animate}
      duration={timer * 60}
      colors={colors}
      strokeWidth={10}
      size={300}
      trailColor={trailColor}
      onComplete={() => {
        !isWorkTimer && setPomodorosFinished(pomodorosFinished + 1);
        stopAimate();
      }}
    >
      {children}
    </CountdownCircleTimer>
  );
};

export default CountdownAnimation;
