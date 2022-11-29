import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import * as React from 'react';
import { cartContext } from '../context/CartContextComponent';
import { addDoc, collection, getFirestore } from 'firebase/firestore';

export default function Form() {
  const { cart, totalToPay } = React.useContext(cartContext);
  const [name, setName] = React.useState('');
  const [surname, setSurname] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [tel, setTel] = React.useState('');
  const [adress, setAdress] = React.useState('');
  const [postalCode, setPostalCode] = React.useState('');

  const handleClickBuyButton = () => {
    alert(`${name} ${surname} Quiere comprar ${JSON.stringify(cart)} - Total: ${totalToPay}`);
    const order = { user: { nombre: name, apellido: surname, email: email, telefono: tel, direccion: adress, codigoPostal: postalCode }, carrito: cart, total: totalToPay };
    console.log(order);

    const dataBase = getFirestore();

    const orders = collection(dataBase, 'orders');
    addDoc(orders, order).then((orderCreated) => {
      console.log(orderCreated.id);
    });
  };
  return (
    <>
      <div className="formContainer">
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '20ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <div className="textFieldContainer">
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
          </div>
        </Box>
        <Button onClick={handleClickBuyButton}>Confirmar Datos</Button>
      </div>
    </>
  );
}
