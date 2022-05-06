import {useEffect, useState} from 'react';
import {timePattern} from "./utils";

const useCountdownTimer1 = (initialSeconds = 5, 
                            pattern = "h:m:s", 
                            timeoutCallback = f => f) => {
  const [seconds, setSeconds] =  useState(initialSeconds);

  useEffect(() => {
    let localTimer = setInterval(() => {
      setSeconds(prev => {
        if (prev <= 1) {
          clearInterval(localTimer);
          timeoutCallback();
        }
        return prev - 1;
      });
    }, 1000)

    return () => {
      clearInterval(localTimer)
    }
  }, [])

  return {
    seconds,
    strTime: timePattern(seconds, pattern),
  }
}

export default useCountdownTimer1;

