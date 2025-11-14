import React, { useRef, useState } from 'react';

const Timer = () => {
  const timerRef = useRef(null);
  const [count, setCount] = useState(0);

  const startTimer = () => {
    timerRef.current = setInterval(() => {
      setCount(prev => prev + 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(timerRef.current);
  };

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
    </div>
  );
};

export default Timer;
