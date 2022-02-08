import * as React from "react";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Chip from '@mui/material/Chip';
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function RoomList() {

  const handleClick = () => {
    console.info('You clicked the Chip.');
  };

  return (
    <div>
      <Stack direction="row" spacing={2}>
        <Chip onClick={handleClick} label="1번 병상"/>
        <Chip onClick={handleClick} variant="outlined" label="2번 병상"/>
        <Chip onClick={handleClick} variant="outlined" label="3번 병상"/>
      </Stack>
    </div>
  );
}
