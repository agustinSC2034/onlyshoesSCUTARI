import React from "react";
import "./Nosotros.css";
import nikeMarca from "../../../img/otras/t_marcas_nike.png";
import adidasMarca from "../../../img/otras/t_marcas_adidas.png";
import pumaMarca from "../../../img/otras/t_marcas_puma.png";
import nikeLogo from "../../../img/otras/logonike2.png";

export const Nosotros = () => {
  return (
    <>
      <div className="portada">
        <div className="logoPortada"></div>
      </div>
      <div className="menuNosotros">
        <div className="textoMenuContainerNosotros">
          <div className="texto-menuNosotros">
            <h3>Quienes somos</h3>
            <p>
              Somos una empresa 100% nacional, con más de 10 años de trayectoria
              en la comercialización de calzado e indumentaria deportiva. Hoy,
              sumamos más empleados, sucursales y a través del e-comerce
              llegamos a satisfacer las necesidades de nuestros clientes en todo
              el país. Así, planeamos liderar el mercado de artículos
              deportivos, ofreciendo las mejores marcas, el más amplio stock y
              atención personalizada en nuestros locales.
            </p>
          </div>
          <div className="texto-menuNosotros">
            <h3>¿Por que elegirnos?</h3>
            <p>
              {" "}
              Somos elegidos por nuestra atención personalizada y gran variedad
              de productos de las marcas líderes. Nos esforzamos para que el
              cliente encuentre lo que busca, dentro de un ambiente único, y
              sectores de las primeras marcas. Contamos con una amplia cobertura
              geográfica, acercando nuestros productos a todo el país con nuevas
              sucursales, distribuidas en Capital Federal y Gran Buenos Aires y
              todo el interior del pais.
            </p>
          </div>
        </div>
        <div class="containerInfoNosotros">
          <div class="containerInfoInsideNosotros">
            <div class="info">
              <h3>
                Nuestra <span> misión </span>
              </h3>
              <p>
                Nuestra misión como empresa es ser la cadena multimarca elegida
                por los consumidores y proveedores. Convertirnos en la
                plataforma de venta de articulos deportivos numero uno del pais
                ofreciendo una experiencia superadora de la competencia{" "}
              </p>
            </div>
            <div class="info">
              <h3>
                Nuestra <span> visión </span>
              </h3>
              <p>
                Nos comunicamos a través del deporte y de la moda con el
                objetivo de acompañarlos en cada momento de sus vidas para que
                puedan competir, entrenar o lucir su estilo personal,
                transmitiendo inspiración e innovación.
              </p>
            </div>
            <div class="info">
              <h3>
                Nuestros <span> valores </span>
              </h3>
              <p>
                {" "}
                Compromiso con el cliente, Seguridad en cada uno de tus envios,
                Innovación, Comunicación, Calidad y eficiencia en todo el
                proceso de compra, siendo siempre cercano al consumidor.
              </p>
            </div>
          </div>
        </div>
        <div class="sliderContenedor">
          <div class="textoSlider">
            <h3>Marcas que confian en nosotros</h3>
          </div>
        </div>
        <div class="imagenesMarcas">
          <div class="img1">
            <img src={nikeMarca} class="img-fluid" alt="NIKE" />
          </div>
          <div class="img1">
            <img src={adidasMarca} class="img-fluid" alt="ADIDAS" />
          </div>
          <div class="img1">
            <img src={pumaMarca} class="img-fluid" alt="PUMA" />
          </div>
        </div>

        <div className="containerMarcas">
          <div className="containerMarcas2">
            <div className="col-md-2 col-sm-6 sm-6 col-xs-6">
              <img
                className="img-fluid img-brand d-block mx-auto"
                src={nikeLogo}
                alt="Tarjeta"
              />
            </div>
            <div className="col-md-2 col-sm-6 sm-6 col-xs-6">
              <img
                className="img-fluid img-brand d-block mx-auto"
                src={nikeLogo}
                alt="Tarjeta"
              />
            </div>
            <div className="col-md-2 col-sm-6 sm-6 col-xs-6">
              <img
                className="img-fluid img-brand d-block mx-auto"
                src={nikeLogo}
                alt="Tarjeta"
              />
            </div>
            <div className="col-md-2 col-sm-6 sm-6 md-2">
              <img
                className="img-fluid img-brand d-block mx-auto"
                src={nikeLogo}
                alt="Tarjeta"
              />
            </div>
          </div>
          <div className="containerMarcas2">
            <div className="col-md-2 col-sm-6 sm-6 col-xs-6">
              <img
                className="img-fluid img-brand d-block mx-auto"
                src={nikeLogo}
                alt="Tarjeta"
              />
            </div>
            <div className="col-md-2 col-sm-6 sm-6 col-xs-6">
              <img
                className="img-fluid img-brand d-block mx-auto"
                src={nikeLogo}
                alt="Tarjeta"
              />
            </div>
            <div className="col-md-2 col-sm-6 sm-6 col-xs-6">
              <img
                className="img-fluid img-brand d-block mx-auto"
                src={nikeLogo}
                alt="Tarjeta"
              />
            </div>
            <div className="col-md-2 col-sm-6 sm-6 md-2">
              <img
                className="img-fluid img-brand d-block mx-auto"
                src={nikeLogo}
                alt="Tarjeta"
              />
            </div>
          </div>
        </div>

        <footer>
          <div class="footerText">
            <div class="newsletterContenedor">
              <div class="newsletter">
                <h1>Suscribite para recibir ofertas increíbles en tu email</h1>
                <div class="mb-3">
                  <div class="inputContactNewsletter">
                    <input
                      type="email"
                      class="form-control"
                      id="exampleFormControlInput1"
                      placeholder="nombre@gmail.com"
                    />
                    <button type="button" class="btn btn-outline-primary">
                      Enviar
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="textoFooter">
              <p>Copyrights AgustinSC</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};
