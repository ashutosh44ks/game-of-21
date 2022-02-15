import { useEffect, useState } from "react";
import PrimaryContainer from "./components/PrimaryContainer";
import SecondaryContainer from "./components/SecondaryContainer";

const Game = ({ data, setData, secondary, setSecondary }) => {
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

  const [playerTurn, setPlayerTurn] = useState(true);
  const [result, setResult] = useState("");

  const onSelect = (id, player = "U") => {
    const tempData = data.map((item) => {
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
    });

    setSecondary({
      prev: tempData[id - 1],
      next:
        id + 3 < 21
          ? tempData[id + 3]
          : { id: "X", selectable: false, selectedBy: "N" },
    });
    setPlayerTurn(id !== 21 ? !playerTurn : playerTurn);
    setData(tempData);
  };

  useEffect(() => {
    console.log("current data = ", data);
    if (!playerTurn) {
      document.querySelector("body").style.pointerEvents = "none"; //disable user interaction till computer chooses his move
      //Calculating Computer's move
      randomSelect();
    } else {
      document.querySelector("body").style.pointerEvents = "all";
    }
  }, [playerTurn]);
  useEffect(() => {
    calcResult();
  });
  const calcResult = () => {
    switch (data[20].selectedBy) {
      case "U":
        setResult("You LOSE");
        break;
      case "C":
        setResult("You WIN");
        break;
      default:
        setResult(playerTurn ? "Your Turn" : "CPU's Turn");
    }
  };

  function randomSelect() {
    const times = 30; //the 30th element will be the final
    setTimeout(() => {
      //Highlight <-> Unhighlight Process
      const interval = setInterval(() => {
        const randomCard = pickRandomCard();
        highlightCard(randomCard);

        setTimeout(() => {
          unhighlightCard(randomCard);
        }, 100); //In equal time as setInterval so as when we move to next card, this gets unhighlighted
      }, 100);

      //To finally stop on one choice
      setTimeout(() => {
        clearInterval(interval); //stops interval from the process of highlighting and unhighlighting

        setTimeout(() => {
          //PROBLEM - HIGHLIGHTING NUM PE KAAM KRTI HAI ID PE NHI, find NUM OF %4
          const cards = data.filter((item) => item.selectable);
          let indexOfFinalCard;
          cards.forEach((card, i) => {
            if (card.id % 4 === 0) indexOfFinalCard = i;
          });
          highlightCard(indexOfFinalCard);
          setTimeout(() => {
            unhighlightCard(indexOfFinalCard);
            onSelect(cards[indexOfFinalCard].id, "C");
          }, 500);
        }, 100); //runs after 100ms (which continues the standard of 100ms from above interval)
      }, times * 100); //runs after 30 intervals of 100ms each
    }, 500); //wait for a second for user to absorb the change in cards in front of him
  }

  function pickRandomCard() {
    return Math.floor(Math.random() * 3);
  }

  function highlightCard(n) {
    const selectableCards = document.querySelectorAll(".selectable");
    selectableCards[n].classList.add("randomSelect");
  }
  function unhighlightCard(n) {
    const selectableCards = document.querySelectorAll(".selectable");
    selectableCards[n].classList.remove("randomSelect");
  }

  return (
    <>
      <PrimaryContainer data={data} onSelect={onSelect} />
      <SecondaryContainer secondary={secondary} result={result} />
    </>
  );
};

export default Game;
