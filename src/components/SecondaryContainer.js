import Card from "./BasicCard";
import Typography from "@mui/material/Typography";

const SecondaryContainer = ({ secondary, result }) => {
    console.log(result)
  return (
    <div className="container-secondary">
      <div className="secondary-cards">
        <Card item={secondary.prev} />
        <Typography sx={{ fontSize: 15 }} color="text.primary">
          Last selected card shows here
        </Typography>
      </div>
      <Typography variant="h3" sx={{ textAlign: "center", padding: "1.5em" }}>
        {result}
      </Typography>
      <div className="secondary-cards">
        <Card item={secondary.next} />
        <Typography sx={{ fontSize: 15 }} color="text.primary">
          Next card in line is shown here
        </Typography>
      </div>
    </div>
  );
};

export default SecondaryContainer;
