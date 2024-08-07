import { Board } from "./components/Board";
import { Square } from "./components/Square";

function App() {
  return (
    <div className="container">
      <Board>
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
      </Board>
    </div>
  );
}

export default App;
