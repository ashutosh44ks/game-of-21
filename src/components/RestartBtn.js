// import { useState, useEffect } from "react";
import Button from "@mui/material/Button";

const RestartBtn = ({ reset }) => {
  return (
    <Button
      variant="outlined"
      color="primary"
      onClick={reset}
      style={{ position: "absolute", left: "1em", top: "1em" }}
    >
      Restart
    </Button>
  );
};

export default RestartBtn;
