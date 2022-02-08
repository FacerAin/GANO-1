import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import MenuItem from "@mui/material/MenuItem";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";

const visitReasons = [
  {
    value: "1",
    label: "수술/시술",
  },
  {
    value: "2",
    label: "약물 치료",
  },
  {
    value: "3",
    label: "응급 수술 후 입원치료",
  },
];

export default function PatientAddDialog({ open, handleClose }) {
  const [reason, setReason] = React.useState("1");

  const [date, setDate] = React.useState(null);

  const handleChangeReason = (event) => {
    setReason(event.target.value);
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>환자 추가</DialogTitle>
      <DialogContent>
        <DialogContentText>
          To subscribe to this website, please enter your email address here. We
          will send updates occasionally.
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="환자 이름"
          fullWidth
          variant="standard"
        />
        <TextField
          autoFocus
          margin="dense"
          id="name"
          select
          value={reason}
          onChange={handleChangeReason}
          label="내원 이유"
          fullWidth
          variant="standard"
        >
          {visitReasons.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DesktopDatePicker
            label="입원 날짜"
            value={date}
            onChange={(newValue) => {
              setDate(newValue);
            }}
            renderInput={(params) => (
              <TextField fullWidth variant="standard" {...params} />
            )}
          />
        </LocalizationProvider>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="주치의"
          fullWidth
          variant="standard"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>취소</Button>
        <Button onClick={handleClose}>추가</Button>
      </DialogActions>
    </Dialog>
  );
}
