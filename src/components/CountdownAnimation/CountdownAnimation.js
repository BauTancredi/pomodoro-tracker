import { useContext } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { SettingsContext } from "../../context/SettingsContext";

const CountdownAnimation = ({
  resetKey = 1,
  timer = 60,
  animate = true,
  children,
}) => {
  const { stopAimate, setPomodorosFinished, pomodorosFinished, isWorkTimer } =
    useContext(SettingsContext);
  return (
    <CountdownCircleTimer
      key={resetKey}
      isPlaying={animate}
      duration={timer * 60}
      colors={[
        ["#FE6F6B", 0.33],
        ["#FE6F6B", 0.33],
        ["#FE6F6B", 0.33],
      ]}
      strokeWidth={6}
      size={220}
      trailColor="#151932"
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
