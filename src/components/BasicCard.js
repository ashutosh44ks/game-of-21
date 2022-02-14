import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function BasicCard({ item, onSelect, type }) {
  const calcBG = () => {
    if (item.selectable) {
      return "yellow";
    } else {
      if (item.selectedBy === "U") return "green";
      else if (item.selectedBy === "C") return "blue";
      else if (item.selectedBy === "N") return "#bfbfbf";
    }
    console.log("ERROR in calculating bg for card");
    return "white";
  };
  return (
    <Button
      sx={{ margin: "1em" }}
      onClick={() => onSelect(item.id)}
      disabled={!item.selectable}
    >
      <Card
        sx={{
          padding: "2em 2em",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: calcBG,
        }}
        className={item.selectable ? "selectable" : ""}
      >
        <CardContent>
          <Typography sx={{ fontSize: 50 }} color="text.primary">
            {item.id}
          </Typography>
          {type===""? (
            <></>
          ) : (
            <Typography sx={{ fontSize: 10 }} color="text.secondary">{type}</Typography>
          )}
        </CardContent>
      </Card>
    </Button>
  );
}
