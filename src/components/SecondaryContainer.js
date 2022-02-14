import Card from "./BasicCard";
import Typography from "@mui/material/Typography";

const SecondaryContainer = ({secondary, result}) => {
  return (
    <div className="CardContainer-Secondary">
        <Card item={secondary.prev} type="last card"/>
        <Typography variant="h3" sx={{ textAlign: "center", padding: "3em" }}>
          {result}
        </Typography>
        <Card item={secondary.next} type="next card"/>
      </div>
  )
}

export default SecondaryContainer