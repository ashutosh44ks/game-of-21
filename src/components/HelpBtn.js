import { useState } from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Rules from "./Rules";

const HelpBtn = () => {
  const [open, setOpen] = useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Button
        variant="outlined"
        color="error"
        onClick={handleOpen}
        style={{ position: "absolute", right: "1em", top: "1em" }}
      >
        Help
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box className="modal">
          <Typography variant="h5" sx={{ textAlign: "center", mb: "1em" }}>
            Rules and Info
          </Typography>
          <Button
            variant="outlined"
            color="error"
            onClick={handleClose}
            style={{ position: "absolute", right: "1em", top: "2em" }}
          >
            Close
          </Button>
          <Rules />
        </Box>
      </Modal>
    </>
  );
};



export default HelpBtn;
