import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { useState } from "react";
const Score = ({ score }) => {
  const [openHint, setOpenHint] = useState(false);

  const [expanded, setExpanded] = useState("");
  const handleClose = () => setOpenHint(false);
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <>
      <Typography
        sx={{ fontSize: 15 }}
        color="text.secondary"
        className="score-counter"
        onClick={() =>
          score[1] >= 0
            ? setOpenHint(!openHint)
            : alert("You need to score at least 3 to see the hint")
        }
      >
        Score: {`${score[0]}-${score[1]}`}
      </Typography>
      <Modal open={openHint} onClose={handleClose}>
        <Box className="modal">
          <Typography variant="h5" sx={{ textAlign: "center", mb: "1em" }}>
            CheatSheet
          </Typography>
          <Button
            variant="outlined"
            color="error"
            className="modal-close"
            onClick={handleClose}
            style={{ position: "absolute", right: "1em", top: "2em" }}
          >
            Close
          </Button>
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
            sx={{ marginBottom: "1em" }}
          >
            <AccordionSummary sx={{ backgroundColor: "#ddd" }}>
              <Typography>Hint</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography component="div">
                There's a simple pattern to the game.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary sx={{ backgroundColor: "#ddd" }}>
              <Typography>How to win?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography component="div">
                The game is designed such that you cant win. The AI will always
                pick a number that is divisible by 4 and since it is you, the
                player who starts the game, you will always lose. Thank You for
                playing!
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Modal>
    </>
  );
};

export default Score;
