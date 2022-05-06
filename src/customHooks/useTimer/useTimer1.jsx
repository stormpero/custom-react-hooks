import {useEffect, useState} from 'react';
import {timePattern} from "./utils";

const useTimer1 = (pattern = "h:m:s") => {
  const [seconds, setSeconds] =  useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);

    return () => {
      clearInterval(timer)
    };
  }, [])

  return {
    seconds,
    strTime: timePattern(seconds, pattern),
  }
}

export default useTimer1;

