import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function BasicCard({ item, onSelect }) {
  const calcBG = () => {
    if(item.selectable)
      return 'yellow';
    else {
      if(item.selectedBy==='U')
        return "green"
      else if (item.selectedBy==='C')
        return "blue"
      else if (item.selectedBy==='N')
        return "#bfbfbf"
    }
    console.log("ERROR")
    return "white";
  }
  return (
    <Button
      sx={{ margin: "1em", padding: "0 3em" }}
      onClick={() => onSelect(item.id)}
      disabled={!item.selectable}
    >
      <Card
        sx={{
          padding: "1em 3em",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: calcBG
        }}
      >
        <CardContent>
          <Typography sx={{ fontSize: 50 }} color="text.primary">
            {item.id}
          </Typography>
        </CardContent>
      </Card>
    </Button>
  );
}
