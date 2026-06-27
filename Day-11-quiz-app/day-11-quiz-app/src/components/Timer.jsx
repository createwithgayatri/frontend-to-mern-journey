import { useEffect, useState } from "react";

export default function Timer({ time, setTime, onTimeUp }) {
  useEffect(() => {
    if (time === 0) {
      onTimeUp();
      return;
    }

    const timer = setInterval(() => {
      setTime(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [time]);

  return <h3>Time Left: {time}s</h3>;
}