import { Link } from "react-router-dom";
import { CartContext } from "../../../Context/CartContext";
import { useContext } from "react";
import imagenCarrito from "../../../img/otras/carro.png"

const CartWidget = () => {
  const {getTotalProducts, productCartList} = useContext(CartContext);
  return (
    <div>
      {
        productCartList.length>0 &&
    <>
    <Link to={"/cart"}>
      <img
        style={{ width: 40 }}
        src={imagenCarrito}
        alt=""
      />
      </Link>
      <span style={{backgroundColor: 'black', borderRadius:"50%", width:"25px", heigth:"25px", fontSize:"20px", color:"white"}}>
                        {getTotalProducts()}
                    </span>
    </>
    }
    </div>
  );
};

export default CartWidget;
