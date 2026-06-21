import "./App.css";
import BooleanExample from "./components/BooleanExample";
import CounterExample from "./components/CounterExample";
import ArrayExample from "./components/ArrayExample";

function App() {
  return (
    <div className="app">
      <h1>State Examples</h1>
      <BooleanExample />
      <CounterExample />
      <ArrayExample />
    </div>
  );
}

export default App;
