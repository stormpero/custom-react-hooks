import logo from '../../logo.svg';
import './App.css';
import useCountdownTimer1 from "../../customHooks/useTimer/useCountdownTimer1";

function App() {
  const {strTime} = useCountdownTimer1(3,"m:s", (arg) => console.log("Я все"));

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Custom Hooks
        </p>
        <p>
          {strTime}
        </p>

      </header>
    </div>
  );
}

export default App;
/*
        <button onClick={startTimer}>Вкл</button>
        <button onClick={stopTimer}>Выкл</button>
 */