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
        <Box sx={style}>
          <Typography variant="h5" sx={{ textAlign: "center", mb: "1em" }}>
            Rules and Info
          </Typography>
          <Rules />
        </Box>
      </Modal>
    </>
  );
};

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "30vw",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export default HelpBtn;
