import Button from "@mui/material/Button";
const RestartBtn = ({ reset, score, setScore }) => {
  return (
    <Button
      variant="outlined"
      color="primary"
      onClick={() => {
        reset();
        setScore((score) => [score[0], score[1] + 1]);
      }}
      style={{ position: "absolute", left: "1em", top: "1em" }}
    >
      Restart
    </Button>
  );
};

export default RestartBtn;
