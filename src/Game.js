import Card from "./components/BasicCard";
import { useState } from "react";

const Game = () => {
  const [data, setData] = useState([
    { id: 1, selectable: true, choice: false },
    { id: 2, selectable: true, choice: false },
    { id: 3, selectable: true, choice: false },
    { id: 4, selectable: false, choice: false },
    { id: 5, selectable: false, choice: false },
    { id: 6, selectable: false, choice: false },
    { id: 7, selectable: false, choice: false },
    { id: 8, selectable: false, choice: false },
    { id: 9, selectable: false, choice: false },
    { id: 10, selectable: false, choice: false },
    { id: 11, selectable: false, choice: false },
    { id: 12, selectable: false, choice: false },
    { id: 13, selectable: false, choice: false },
    { id: 14, selectable: false, choice: false },
    { id: 15, selectable: false, choice: false },
    { id: 16, selectable: false, choice: false },
    { id: 17, selectable: false, choice: false },
    { id: 18, selectable: false, choice: false },
    { id: 19, selectable: false, choice: false },
    { id: 20, selectable: false, choice: false },
    { id: 21, selectable: false, choice: false },
  ]);
  //   let count=1;
  //   const [data, setData] = useState(Array(21).fill({id: count++, selectable: false, choice: false}));
  const buildSelectables = (id) => {
    console.log("you chose number " + id);
    for (let i = id - 3; i < id; i++) {
      if (data[i] !== undefined) {
        console.log(`disabling card ${i + 1}`);
        data[i].selectable = false;
      }
    }
    for (let i = id; i < id + 3; i++) {
      if (data[i] !== undefined) {
        console.log(`enabling card ${i + 1}`);
        data[i].selectable = true;
      }
    }
    //DOUBT - card(id) still not disabled
  };
  const pickChoice = (id) => {
    setData(
      data.map((item) =>
        item.id === id ? { ...item, choice: !item.choice } : item
      )
    );
    buildSelectables(id);
  };
  return (
    <div className="CardContainer">
      {data.map((item) => (
        <Card key={item.id} item={item} pickChoice={pickChoice} />
      ))}
    </div>
  );
};

export default Game;
