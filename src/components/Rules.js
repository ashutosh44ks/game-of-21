import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { useState } from "react";

const Rules = () => {
  const [expanded, setExpanded] = useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary sx={{backgroundColor: "#ddd"}}>
          <Typography>Rules</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography component="div">
            <ol>
              <li>You select a card</li>
              <li>CPU selects a card</li>
              <li>Repeat 1 and 2 till card selected is 21</li>
              <li>Whoever selects card #21 loses</li>
            </ol>
            Selection of card has to be done from the 3 immediate next cards of the last selected card
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary sx={{backgroundColor: "#ddd"}}>
          <Typography>Color Code</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography component="div">
            <p>Yellow - Selectable Card</p>
            <p>Grey - Non-Selectable Card</p>
            <p>Green - Card chosen by You</p>
            <p>Blue - Card chosen by CPU</p>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Rules;
