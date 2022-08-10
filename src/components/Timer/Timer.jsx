import "./timer.css";
import { GiPauseButton, FaPlay, VscDebugRestart } from "../../Utils/icons";
import { useEffect, useState, useRef } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useTask } from "../../Context/task-context";
const Timer = ({ focusTime, breakTime }) => {
  const [isPaused, setIsPaused] = useState(true);
  const [secondsLeft, setSecondsLeft] = useState(0);
  const { mode, setMode } = useTask();

  // Ref
  const secondsLeftRef = useRef(secondsLeft);
  const isPausedRef = useRef(isPaused);
  const modeRef = useRef(mode);

  const tick = () => {
    secondsLeftRef.current--;
    setSecondsLeft(secondsLeftRef.current);
  };
  useEffect(() => {
    const switchMode = () => {
      const nextMode = modeRef.current === "work" ? "break" : "work";
      const nextSeconds = (nextMode === "work" ? focusTime : breakTime) * 60;
      // Mode setting
      setMode(nextMode);
      modeRef.current = nextMode;
      // SecondsLeft setting
      setSecondsLeft(nextSeconds);
      secondsLeftRef.current = nextSeconds;
    };
    secondsLeftRef.current = focusTime * 60;
    setSecondsLeft(secondsLeftRef.current);
    const interval = setInterval(() => {
      if (isPausedRef.current) {
        return;
      }
      if (secondsLeftRef.current === 0) {
        return switchMode();
      }
      tick();
    }, 100);
    return () => clearInterval(interval);
  }, [focusTime, breakTime]);
  // Timer calculation for progress Bar
  const totalSeconds = mode === "work" ? focusTime * 60 : breakTime * 60;
  const percentage = Math.round((secondsLeft / totalSeconds) * 100);
  const minutes = Math.floor(secondsLeft / 60);
  let seconds = secondsLeft % 60;
  if (seconds < 10) seconds = "0" + seconds;
  return (
    <div className="timer-container progress-bar-wrapper">
      <div className="progress-bar">
        <CircularProgressbar
          value={percentage}
          text={minutes + ":" + seconds}
          minValue="0"
          maxValue="100"
          styles={buildStyles({
            pathColor: "var(--pomodoro-primary-color)",
            textColor: "black",
            trailColor: "#415178",
          })}
        />
        ;
      </div>
      <div className="btns-align ">
        {isPaused ? (
          <FaPlay
            className="filter-icon pomodoro-icons timer-icons"
            onClick={() => {
              setIsPaused(false);
              isPausedRef.current = false;
            }}
          />
        ) : (
          <GiPauseButton
            className="filter-icon pomodoro-icons timer-icons"
            onClick={() => {
              setIsPaused(true);
              isPausedRef.current = true;
            }}
          />
        )}
        <VscDebugRestart className="filter-icon pomodoro-icons timer-icons" />
      </div>
    </div>
  );
};
export { Timer };
