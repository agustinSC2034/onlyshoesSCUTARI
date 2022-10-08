import "./Footer.css";
import React from "react";

export const FooterNuevoComponente = () => {
  return (
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
  );
};
