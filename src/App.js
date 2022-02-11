import Card from "./components/BasicCard";
import { useState } from "react";

function App() {
  const [data, setData] = useState([
    { id: 1, selection: true },
    { id: 2, selection: false },
    { id: 3, selection: false },
    { id: 4, selection: false },
    { id: 5, selection: false },
    { id: 6, selection: false },
    { id: 7, selection: false },
    { id: 8, selection: false },
    { id: 9, selection: false },
    { id: 10, selection: false },
    { id: 11, selection: false },
    { id: 12, selection: false },
    { id: 13, selection: false },
    { id: 14, selection: false },
    { id: 15, selection: false },
    { id: 16, selection: false },
    { id: 17, selection: false },
    { id: 18, selection: false },
    { id: 19, selection: false },
    { id: 20, selection: false },
    { id: 21, selection: false },
  ]);
  const toggleSelection = (id) => {
    setData(
      data.map((item) =>
        item.id === id ? { ...item, selection: !item.selection } : item
      )
    )
  };
  return (
    <div className="App">
      <div className="CardContainer">
        {data.map((item) => (
          <Card key={item.id} item={item} toggleSelection={toggleSelection} />
        ))}
      </div>
    </div>
  );
}

export default App;
