import "./App.css";
import Left from "./components/Main/Main-Left/Left";
import Right from "./components/Main/Main-Right/Right";
import Menu from "../src/pages/Menu/Menu.jsx";

function App() {
  return (
    <div style={{ display: "flex", gap:"25px" }} className="App">
      <Menu />

      <Left />
      <Right />
    </div>
  );
}

export default App;
