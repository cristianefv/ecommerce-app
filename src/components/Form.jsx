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
            '& .MuiTextField-root': { m: 1, width: '25ch' },
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
            <TextField id="outlined-multiline-static" label="Indicacion que facilite la entrega del pedido" multiline rows={6} />

            <FormGroup>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                required
                label="Acepto informar el pago mediante mail a compras@perfildelvino.com.ar antes de la fecha de vencimiento de mi reserva (3 días) y comprendo que de no hacerlo mi pedido será dado de baja teniendo que volver a realizar uno nuevo con los precios y stock actualizados."
              />
            </FormGroup>

            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Provincia</InputLabel>
              <Select labelId="demo-simple-select-label" id="demo-simple-select" value="" label="Provincias" onChange={handleChange}>
                {provincia.map((item) => (
                  <MenuItem key={item.id} value={item.nombre}>
                    {item.nombre}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
        </Box>
      </div>
    </>
  );
}
