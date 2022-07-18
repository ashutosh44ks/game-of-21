import { useState } from "react";
import Game from "./Game";
import HelpBtn from "./components/HelpBtn";
import RestartBtn from "./components/RestartBtn";
import Score from "./components/ScoreBtn";

function App() {
  const [data, setData] = useState([
    { id: 1, selectable: true, selectedBy: "N" },
    { id: 2, selectable: true, selectedBy: "N" },
    { id: 3, selectable: true, selectedBy: "N" },
    { id: 4, selectable: false, selectedBy: "N" },
    { id: 5, selectable: false, selectedBy: "N" },
    { id: 6, selectable: false, selectedBy: "N" },
    { id: 7, selectable: false, selectedBy: "N" },
    { id: 8, selectable: false, selectedBy: "N" },
    { id: 9, selectable: false, selectedBy: "N" },
    { id: 10, selectable: false, selectedBy: "N" },
    { id: 11, selectable: false, selectedBy: "N" },
    { id: 12, selectable: false, selectedBy: "N" },
    { id: 13, selectable: false, selectedBy: "N" },
    { id: 14, selectable: false, selectedBy: "N" },
    { id: 15, selectable: false, selectedBy: "N" },
    { id: 16, selectable: false, selectedBy: "N" },
    { id: 17, selectable: false, selectedBy: "N" },
    { id: 18, selectable: false, selectedBy: "N" },
    { id: 19, selectable: false, selectedBy: "N" },
    { id: 20, selectable: false, selectedBy: "N" },
    { id: 21, selectable: false, selectedBy: "N" },
  ]);
  const originalData = [
    { id: 1, selectable: true, selectedBy: "N" },
    { id: 2, selectable: true, selectedBy: "N" },
    { id: 3, selectable: true, selectedBy: "N" },
    { id: 4, selectable: false, selectedBy: "N" },
    { id: 5, selectable: false, selectedBy: "N" },
    { id: 6, selectable: false, selectedBy: "N" },
    { id: 7, selectable: false, selectedBy: "N" },
    { id: 8, selectable: false, selectedBy: "N" },
    { id: 9, selectable: false, selectedBy: "N" },
    { id: 10, selectable: false, selectedBy: "N" },
    { id: 11, selectable: false, selectedBy: "N" },
    { id: 12, selectable: false, selectedBy: "N" },
    { id: 13, selectable: false, selectedBy: "N" },
    { id: 14, selectable: false, selectedBy: "N" },
    { id: 15, selectable: false, selectedBy: "N" },
    { id: 16, selectable: false, selectedBy: "N" },
    { id: 17, selectable: false, selectedBy: "N" },
    { id: 18, selectable: false, selectedBy: "N" },
    { id: 19, selectable: false, selectedBy: "N" },
    { id: 20, selectable: false, selectedBy: "N" },
    { id: 21, selectable: false, selectedBy: "N" },
  ];
  const [secondary, setSecondary] = useState({
    prev: { id: "X", selectable: false, selectedBy: "N" },
    next: data[3],
  });
  const reset = () => {
    setData(originalData);
    setSecondary({
      prev: { id: "X", selectable: false, selectedBy: "N" },
      next: originalData[3],
    });
  };
  const [score, setScore] = useState([0, 0]);
  return (
    <div className="App">
      <RestartBtn reset={reset} score={score} setScore={setScore} />
      <HelpBtn />
      <Game
        data={data}
        setData={setData}
        secondary={secondary}
        setSecondary={setSecondary}
      />
      <Score score={score} setScore={setScore} />
    </div>
  );
}

export default App;
