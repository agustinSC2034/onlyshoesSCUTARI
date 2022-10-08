import { Item } from "../Item/Item";
import "./ItemList.css";
import { Link } from "react-router-dom";

export const ItemList = ({ items }) => {
  return (
    <>
      <div class="portada">
        <div class="logoPortadaContacto"></div>
      </div>
      <div className="gridMayor">
      <div className="grid-product">
        {items.map((producto) => (
          <Item key={producto.id} item={producto} />
        ))}
      </div>
      </div>
    </>
  );
};
