import React, { useState, useRef, useEffect } from 'react';
import './Stopwatch.sass';

export default function Stopwatch() {
  const [time, setTime] = useState({ ms: 0, s: 0, m: 0, h: 0 });
  const intervalRef = useRef(null);

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const start = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setTime(prev => {
        let { ms, s, m, h } = prev;
        ms += 10;
        if (ms === 1000) {
          ms = 0;
          s += 1;
          if (s === 60) {
            s = 0;
            m += 1;
            if (m === 60) {
              m = 0;
              h += 1;
            }
          }
        }
        return { ms, s, m, h };
      });
    }, 10);
  };

  const pause = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const reset = () => {
    pause();
    setTime({ ms: 0, s: 0, m: 0, h: 0 });
  };

  const format = () => {
    const { h, m, s, ms } = time;
    const hh = h < 10 ? `0${h}` : h;
    const mm = m < 10 ? `0${m}` : m;
    const ss = s < 10 ? `0${s}` : s;
    const mss = ms < 10 ? `00${ms}` : ms < 100 ? `0${ms}` : ms;
    return `${hh} : ${mm} : ${ss} : ${mss}`;
  };

  return (
    <div className="container">
      <div className="timerDisplay" role="timer" aria-live="polite">
        {format()}
      </div>
      <div className="buttons">
        <button onClick={start} aria-label="Start stopwatch">Start</button>
        <button onClick={pause} aria-label="Pause stopwatch">Pause</button>
        <button onClick={reset} aria-label="Reset stopwatch">Reset</button>
      </div>
    </div>
  );
}
