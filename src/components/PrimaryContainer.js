import Card from "./BasicCard";
import Typography from "@mui/material/Typography";

const PrimaryContainer = ({ data, onSelect }) => {
  return (
    <>
      <Typography sx={{ fontSize: 15, textAlign:"center", transform: "translateY(2em)" }} color="text.secondary">
        Selectable Cards
      </Typography>
      <div className="container-primary">
        {data
          .filter((item) => item.selectable)
          .map((item) => (
            <Card key={item.id} item={item} onSelect={onSelect} />
          ))}
      </div>
    </>
  );
};

export default PrimaryContainer;
