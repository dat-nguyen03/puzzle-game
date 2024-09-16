import React from "react";
import logo from "./logo.svg";
import "./App.css";
import PuzzleGrid from "./components/PuzzleGrid";
import TetrisGame from "./components/Teris";

function App() {
  return (
    <div className="App">
      <h1>Trò chơi xếp hình</h1>
      {/* <PuzzleGrid /> */}
      <TetrisGame />
    </div>
  );
}

export default App;
