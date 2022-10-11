import React from "react";
import "./Home.css";
import { ItemListContainer } from "../../Desafios/ItemListContainer/itemListContainer";
import imgBanco1 from "../../../img/logosnuevos/logos_visa.062f66a8.svg";
import imgBanco2 from "../../../img/logosnuevos/logos_amex.ed4e7028.svg";
import imgBanco3 from "../../../img/logosnuevos/logos_maestro.56f97b0e.svg";
import imgBanco4 from "../../../img/logosnuevos/logos_master.60fdbcf5.svg";
import imgBanco5 from "../../../img/logosnuevos/logos_naranja.6f60602d.svg";
import imgBanco6 from "../../../img/logosnuevos/modo-2021.svg";
import { Link } from "react-router-dom";
import "bootstrap";

export const Home = () => {
  return (
    <>
      <div className="menuIndexHome">
        <div className="portadaHome">
          <div className="carousel-caption">
            <h1 className="tituloEspecial">Only Shoes</h1>
            <h5 className="subtituloEspecial">
              Tu indumentaria en un solo lugar
            </h5>
            <div className="botonesHomeEspeciales">
              <Link class="navEspecial" to="/Marcas/Nike">
                <input type="button" value="MARCAS" />
              </Link>

              <Link class="nav-link" to="/Contacto">
                <input type="button" value="CONTACTANOS" />
              </Link>
            </div>
          </div>
        </div>
        <div class="textoMenuContainer">
          <div class="texto-menu">
            <a name="ofertas">
              <h3></h3>
            </a>
          </div>
        </div>
        <div class="enviosContainer">
          <h3>
            Envios y devoluciones <span>GRATIS!</span>
          </h3>
        </div>

        <div class="sliderContenedor">
          <div class="textoSlider">
            <h3>Todos los medios de pago disponibles</h3>
          </div>
        </div>
        <div className="containerPagos">
          <div className="containerPagos2">
            <div className="col-md-2 col-sm-6 sm-6 col-xs-6">
              <img
                className="img-fluid img-brand d-block mx-auto"
                src={imgBanco1}
                alt="Tarjeta"
              />
            </div>
            <div className="col-md-2 col-sm-6 sm-6 md-2">
              <img
                className="img-fluid img-brand d-block mx-auto"
                src={imgBanco2}
                alt="Tarjeta"
              />
            </div>
            <div className="col-md-2 col-sm-6 my-6 xs-6">
              <img
                className="img-fluid img-brand d-block mx-auto"
                src={imgBanco3}
                alt="Tarjeta"
              />
            </div>
            <div className="col-md-2 col-sm-6 my-6 xs-6">
              <img
                className="img-fluid img-brand d-block mx-auto"
                src={imgBanco4}
                alt="Tarjeta"
              />
            </div>
            <div className="col-md-2 col-sm-6 my-6 xs-6">
              <img
                className="img-fluid img-brand d-block mx-auto"
                src={imgBanco5}
                alt="Tarjeta"
              />
            </div>
            <div className="col-md-2 col-sm-6 my-6 xs-6">
              <img
                className="img-fluid img-brand d-block mx-auto"
                src={imgBanco6}
                alt="Tarjeta"
              />
            </div>
          </div>
        </div>
        <div class="enviosContainer">
          <h3>
            3 cuotas <span>Sin interes</span> en todo el sitio{" "}
          </h3>
        </div>
        <div class="sliderContenedor">
          <div class="textoSlider">
            <h3>Aprovechá las promos con tu banco</h3>
          </div>
        </div>

        <div className="containerPagos">
          <div className="containerPagos2">
            <div className="col-md-2 col-sm-6 sm-6 col-xs-6">
              <img
                className="img-fluid img-brand d-block mx-auto"
                src={imgBanco1}
                alt="Tarjeta"
              />
            </div>
            <div className="col-md-2 col-sm-6 sm-6 md-2">
              <img
                className="img-fluid img-brand d-block mx-auto"
                src={imgBanco2}
                alt="Tarjeta"
              />
            </div>
            <div className="col-md-2 col-sm-6 my-6 xs-6">
              <img
                className="img-fluid img-brand d-block mx-auto"
                src={imgBanco3}
                alt="Tarjeta"
              />
            </div>
            <div className="col-md-2 col-sm-6 my-6 xs-6">
              <img
                className="img-fluid img-brand d-block mx-auto"
                src={imgBanco4}
                alt="Tarjeta"
              />
            </div>
            <div className="col-md-2 col-sm-6 my-6 xs-6">
              <img
                className="img-fluid img-brand d-block mx-auto"
                src={imgBanco5}
                alt="Tarjeta"
              />
            </div>
            <div className="col-md-2 col-sm-6 my-6 xs-6">
              <img
                className="img-fluid img-brand d-block mx-auto"
                src={imgBanco6}
                alt="Tarjeta"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
