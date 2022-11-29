import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import * as React from 'react';

export default function Form() {
  return (
    <>
      <div className="formContainer">
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 2, width: '20ch' },
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
