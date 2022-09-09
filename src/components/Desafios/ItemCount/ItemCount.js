import { useState, useEffect } from "react";
import "../Imagen/Imagen.css";

export const ItemCount = ({ stock, initial, onAdd }) => {
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
        <div class="text-center">
          <p>Stock disponible: {stock - contador}</p>
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
            onClick={() => onAdd(contador)}
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
            onClick={() => onAdd(contador)}
            className={`btn btn-primary ${
              contador > 0 ? "activo" : "inactivo"
            }`}
            disabled={true}
          >
            Agregar al carrito
          </button>
        )}
       <br></br><br></br><br></br><br></br><br></br><br></br>
      </div>
    </div>
  );
};

export default ItemCount;
