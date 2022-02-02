import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function BasicCard() {
  return (
    <Card sx={{ minWidth: 275, maxWidth: 400 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          1번 병상
        </Typography>
        <Typography variant="h5" component="div">
          환자 이름
        </Typography>
        <Typography variant="h5" component="div">
          입원 날짜
        </Typography>
        <Typography variant="h5" component="div">
          내원 이유
        </Typography>
        <Typography variant="h5" component="div">
          주치의
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">수정</Button>
        <Button size="small">삭제</Button>
      </CardActions>
    </Card>
  );
}
