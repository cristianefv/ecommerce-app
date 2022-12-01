import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import * as React from 'react';
import { cartContext } from '../context/CartContextComponent';
import Stack from '@mui/material/Stack';

export default function Form() {
  const { name, surname, email, tel, adress, postalCode, setName, setSurname, setEmail, setTel, setAdress, setPostalCode, handleClickBuyButton } = React.useContext(cartContext);

  return (
    <>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      ></Box>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '20ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField style={{ width: 450 }} required id="outlined-required" label="Nombre" defaultValue={name} onChange={(e) => setName(e.target.value)} />
        <TextField style={{ width: 450 }} required id="outlined-required" label="Apellido" defaultValue={surname} onChange={(e) => setSurname(e.target.value)} />
        <TextField style={{ width: 450 }} required id="outlined-required" label="Email" defaultValue={email} type="email" onChange={(e) => setEmail(e.target.value)} />
        <TextField
          style={{ width: 450 }}
          id="outlined-number"
          label="Teléfono / Celular"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          defaultValue={tel}
          onChange={(e) => setTel(e.target.value)}
        />
        <TextField style={{ width: 450 }} required id="outlined-required" label="Domicilio" defaultValue={adress} onChange={(e) => setAdress(e.target.value)} />
        <TextField style={{ width: 450 }} required id="outlined-required" label="Codigo Postal" defaultValue={postalCode} onChange={(e) => setPostalCode(e.target.value)} />
      </Box>
      <div className="confirmPurchase">
        <Stack direction="row" spacing={2}>
          <Button onClick={() => handleClickBuyButton()} variant="contained" color="success">
            Confirmar compra
          </Button>
        </Stack>
      </div>
    </>
  );
}
