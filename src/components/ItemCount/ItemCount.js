import { useState, useEffect } from "react";
import { ImagenZapatilla } from "../Imagen/Imagen";
import "../Imagen/Imagen.css";
import Pikachu from "../../assets/pikachu.png";
import Zapatilla from "../../assets/airJordan.jpg";

export const ItemCount = ({ stock, initial, agregarProducto }) => {
  const [contador, setContador] = useState(initial);

  const sumar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };

  const restar = () => {
    if (contador > 0) {
      setContador(contador - 1);
    }
  };

  return (
    <div class="container-fluid">
      <br></br>
      <div class="text-center">
        <p></p>
        <div className="seccion-temaImagenesZapas">
          <ImagenZapatilla
            imagen={Zapatilla}
            precio={25000}
            texto="Zapatillas Nike Air Jordan"
          />
        </div>
        <div class="text-center">
          <p>Numero de clics {contador}</p>
          <button class="btn btn-primary" onClick={restar}>
            -
          </button>
          <> </> <> </>
          <> </>
          <button class="btn btn-primary" onClick={sumar}>
            +
          </button>
        </div>
        <br></br>

        {contador > 0 ? (
          <button
            class="btn btn-primary"
            onClick={() => agregarProducto(contador)}
            className={`btn btn-primary ${
              contador > 0 ? "activo" : "inactivo"
            }`}
            disabled={false}
          >
            Agregar al carrito
          </button>
        ) : (
          <button
            class="btn btn-primary"
            onClick={() => agregarProducto(contador)}
            className={`btn btn-primary ${
              contador > 0 ? "activo" : "inactivo"
            }`}
            disabled={true}
          >
            Agregar al carrito
          </button>
        )}
        {contador > 0 ? (
          <p>Ya puede agregar productos</p>
        ) : (
          <p>Incremente los productos!</p>
        )}
      </div>
    </div>
  );
};

export default ItemCount;
