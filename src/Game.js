import { useEffect, useState } from "react";
import Card from "./components/BasicCard";
import Typography from '@mui/material/Typography';

const Game = () => {
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

  const [playerTurn, setPlayerTurn] = useState(true);
  const [result, setResult] = useState("GAME ON");
  // const [data, setData] = useState(
  //   [...Array(21).keys()].map((key) => ({
  //     id: key + 1,
  //     selectable: false,
  //     choice: false,
  //   }))
  // );
  // function start(){
  //   const temp = [...data];
  //   for(let i=0; i<3; i++)
  //     temp[i].selectable=true;
  //   setData(temp)
  // }

  const onSelect = (id, player = "U") => {
    setData(
      data.map((item) => {
        //RESETTING SELECTABLES
        // if (item.id === id - 3 || item.id === id - 2 || item.id === id - 1)
        item.selectable = false;
        if (item.id === id + 3 || item.id === id + 2 || item.id === id + 1)
          item.selectable = true;
        //ASSIGNING SELECT
        if (item.id === id) {
          // item.selectable = false;
          return { ...item, selectedBy: player };
        } else return item;
      })
    );
    setPlayerTurn(!playerTurn);
  };
  console.log("current data = ", data);

  useEffect(() => {
    if (!playerTurn) {
      //Calculating Computer's move
      let id;
      data.forEach((item) => {
        if (item.selectable && item.id % 4 === 0) id = item.id;
      });
      onSelect(id, "C");
    }
    calcResult();
  }, [playerTurn]);
  const calcResult = () => {
    switch (data[20].selectedBy) {
      case "U":
        setResult("You LOSE")
        break;
      case "C":
        setResult("You WIN");
        break;
      default:
        console.log("ERROR IN RESULT")
    }
  };
  return (
    <>
      <div className="CardContainer">
        {data.map((item) => (
          <Card key={item.id} item={item} onSelect={onSelect} />
        ))}
      </div>
      <Typography variant="h3" sx={{textAlign: "center", padding: "3em"}}>{result}</Typography>
    </>
  );
};

export default Game;
