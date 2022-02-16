import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function BasicCard({ item, onSelect }) {
  const calcBG = () => {
    if (item.selectable) {
      return "yellow";
    } else {
      if (item.selectedBy === "U") return "lawngreen";
      else if (item.selectedBy === "C") return "dodgerblue";
      else if (item.selectedBy === "N") return "#bfbfbf";
    }
    console.log("ERROR in calculating bg for card");
    return "white";
  };
  return (
    <Button
      className="card-btn"
      onClick={() => onSelect(item.id)}
      disabled={!item.selectable}
    >
      <Card
        sx={{
          backgroundColor: calcBG,
        }}
        className={item.selectable ? "selectable card" : "card"}
      >
        <CardContent>
          <Typography
            sx={{ fontSize: 50 }}
            color={item.selectedBy === "C" ? "gainsboro" : "text.primary"}
          >
            {item.id}
          </Typography>
        </CardContent>
      </Card>
    </Button>
  );
}
