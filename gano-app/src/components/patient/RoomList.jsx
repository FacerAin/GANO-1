import * as React from "react";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function RoomList() {
  return (
    <div>
      <Stack direction="row" spacing={2}>
        <Item>1번 병상</Item>
        <Item>2번 병상</Item>
        <Item>3번 병상</Item>
      </Stack>
    </div>
  );
}
