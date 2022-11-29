import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { provincias } from '../data/provincias';
import { Button } from '@mui/material';

export default function Form() {
  const [provincia, setProvincia] = React.useState([]);

  const handleChange = (event) => {
    setProvincia(event.target.value);
  };
  React.useEffect(() => {
    const getProvincias = new Promise((res, rej) => {
      res(provincias);
    });

    getProvincias.then((res) => setProvincia(provincias));
  });

  return (
    <>
      <div className="formContainer">
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 2, width: '40ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField required id="outlined-required" label="Nombre" defaultValue="" />
            <TextField required id="outlined-required" label="Apellido" defaultValue="" />
            <TextField required id="outlined-required" label="Email" defaultValue="" type="email" />

            <TextField
              id="outlined-number"
              label="Teléfono / Celular"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
            />

            <TextField required id="outlined-required" label="Domicilio" defaultValue="" />
            <TextField required id="outlined-required" label="Codigo Postal" defaultValue="" />
          </div>
        </Box>
        <Button>Confirmar Datos</Button>
      </div>
    </>
  );
}
