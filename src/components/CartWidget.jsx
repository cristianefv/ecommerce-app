import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const seeCart = () => {
  console.log('viendo carrito');
};

export default function CartWidget() {
  return (
    <>
      <button className="btnCart">
        <ShoppingCartIcon onClick={seeCart} />
      </button>
    </>
  );
}
