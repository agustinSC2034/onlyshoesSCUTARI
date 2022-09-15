import { Link } from "react-router-dom";
import { CartContext } from "../../../Context/CartContext";
import { useContext } from "react";

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
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLP8a65B8V3WAVk7HPgU34BVR6nrGQtXzG1Ht4Cr_czPU92NyID8vX13hmtQE3eVpYKGc&usqp=CAU"
        alt="Carrito de compras"
      />
      </Link>
      <span style={{backgroundColor: 'white', borderRadius:"50%", width:"20px", heigth:"20px", fontSize:"20px", color:"black"}}>
                        {getTotalProducts()}
                    </span>
    </>
    }
    </div>
  );
};

export default CartWidget;
