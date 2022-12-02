import { Typography } from '@mui/material';
import React from 'react';
export default function RenderStock({ update, onAdd }) {
  return <Typography>{parseInt(`${update - onAdd}`)}</Typography>;
}
