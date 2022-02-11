import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function BasicCard({ item, pickChoice }) {
  return (
    <Button
      sx={{ margin: "1em", padding: "0 3em" }}
      onClick={() => pickChoice(item.id)}
      disabled={!item.selectable}
    >
      <Card
        sx={{
          padding: "1em 3em",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: item.selectable ? (item.choice?"green":"yellow") : "white",
          

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
