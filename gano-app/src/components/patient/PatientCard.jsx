import * as React from "react";
import PatientAddDialog from "components/patient/PatientAddDialog";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { CardActionArea } from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function PatientCard() {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <PatientAddDialog open={open} handleClose={handleClose} />
      <Card sx={{ minWidth: 275, maxWidth: 400 }}>
        <CardActionArea>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
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
        </CardActionArea>
        <CardActions>
          <Button size="small" onClick={handleClickOpen}>수정</Button>
          <Button size="small">삭제</Button>
        </CardActions>
      </Card>
    </>
  );
}
