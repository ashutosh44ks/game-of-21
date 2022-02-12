import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function BasicCard({ item, onSelect }) {
  const calcBG = () => {
    if(item.selectable){
      if(item.id===21)
        return "url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcmkt-image-prd.global.ssl.fastly.net%2F0.1.0%2Fps%2F573499%2F2000%2F1332%2Fm1%2Ffpnw%2Fwm1%2Fskull-pattern-.jpg%3F1443460483%26s%3Db0bb824477a2ce057aea05677822cdc4&f=1&nofb=1) center"
      else return "yellow"
    }
    else {
      if(item.selectedBy==='U')
        return "green"
      else if (item.selectedBy==='C')
        return "blue"
      else if (item.selectedBy==='N')
        return "#bfbfbf"
    }
    console.log("ERROR in calculating bg for card")
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
          background: calcBG,
          backgroundSize: "cover",
          backgroundRepeat: "no repeat",
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
