import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function BasicCard({ item, toggleSelection }) {
  return (
    <Button sx={{ margin: "2em" }} onClick={()=>toggleSelection(item.id)}>
      <Card
        sx={{
          padding: "1em 3em",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: item.selection ? "green" : "white",
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
