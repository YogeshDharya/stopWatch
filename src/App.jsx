import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const handleStartorStop = () => {
    setIsRunning((prevIsRunning) => !prevIsRunning);
  };

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes}:${String(seconds).padStart(2, '0')}`;
  };

  useEffect(() => {
    let intervalID;

    if (isRunning) {
      intervalID = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1);
      }, 1000);
    }

    return () => clearInterval(intervalID);
  }, [isRunning]);

  const handleRestart = () => {
    setTimer(0);
    setIsRunning(false);
  };

  return (
    <>
      <h1>Stopwatch</h1>
      <h3>Time: {formatTime(timer)}</h3>
      <button onClick={handleStartorStop}>{isRunning ? 'Stop' : 'Start'}</button>
      <button onClick={handleRestart}>Reset</button>
    </>
  );
}

export default App;
