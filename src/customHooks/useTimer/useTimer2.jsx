import {useState} from 'react';
import {timePattern} from "./utils";

const useTimer2 = (pattern = "h:m:s") => {
  const [seconds, setSeconds] =  useState(0);
  const [timer, setTimer] = useState(null);

  const startTimer = () => {
    if (timer) return;
    setTimer(
      setInterval(() => {
        setSeconds(prev => prev + 1);
      }, 1000)
    );
  }

  const stopTimer = () => {
    clearInterval(timer)
    setTimer(null);
  }

  const clearTimer = () => {
    stopTimer();
    setSeconds(0);
  }

  return {
    seconds,
    startTimer,
    stopTimer,
    clearTimer,
    strTime: timePattern(seconds, pattern),
  }
}

export default useTimer2;

