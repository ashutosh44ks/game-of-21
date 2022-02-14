import Card from "./BasicCard";
import Typography from "@mui/material/Typography";

const SecondaryContainer = ({ secondary, result }) => {
  return (
    <div className="container-secondary">
      <div className="secondary-cards">
        <Card item={secondary.prev} />
        <Typography sx={{ fontSize: 15 }} color="text.secondary">
          Last selected card
        </Typography>
      </div>
      <Typography variant="h3" sx={{ textAlign: "center", padding: "1.5em" }}>
        {result}
      </Typography>
      <div className="secondary-cards">
        <Card item={secondary.next} />
        <Typography sx={{ fontSize: 15 }} color="text.secondary">
          Next card in line
        </Typography>
      </div>
    </div>
  );
};

export default SecondaryContainer;
