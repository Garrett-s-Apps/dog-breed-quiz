import { useState } from 'react';
import StartScreen from './components/StartScreen';
import Quiz from './components/Quiz';
import './App.css';

function App() {
  const [started, setStarted] = useState(false);

  return (
    <div className="app">
      <div className="background-shapes">
        <div className="shape shape-1" />
        <div className="shape shape-2" />
        <div className="shape shape-3" />
      </div>
      {!started ? (
        <StartScreen onStart={() => setStarted(true)} />
      ) : (
        <Quiz onRestart={() => setStarted(false)} />
      )}
    </div>
  );
}

export default App;
