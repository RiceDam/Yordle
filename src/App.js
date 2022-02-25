import "./App.css";
import Toolbar from "./components/Toolbar";
import Game from "./components/Game";
import Keyboard from "./components/Keyboard";

function App() {
  return (
    <div className="App">
      <Toolbar></Toolbar>
      <Game></Game>
      <Keyboard></Keyboard>
    </div>
  );
}

export default App;
