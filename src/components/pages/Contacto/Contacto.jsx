import React from "react";
import "./Contacto.css";

export const Contacto = () => {
  return (
    <>
      <div class="portada">
        <div class="logoPortadaContacto"></div>
      </div>
      <div class="menuContacto">
        <div class="textoContacto">
          <div>
            <h3>Contactanos!</h3>
          </div>
        </div>


        <form action="">
        <div class="containerContact">
                <div class="mb-3">
                    <div class="inputContact">
                        <label for="exampleFormControlInput1" class="form-label">Nombre</label>
                        <input type="name" class="form-control" id="exampleFormControlInput1"
                            placeholder="escribe tu nombre"/>
                    </div>
                </div>
                <div class="mb-3">
                    <div class="inputContact">
                        <label for="exampleFormControlInput1" class="form-label">Apellido</label>
                        <input type="name" class="form-control" id="exampleFormControlInput1"
                            placeholder="escribe tu apellido"/>
                    </div>
                </div>
                <div class="mb-3">
                    <div class="inputContact">
                        <label for="exampleFormControlInput1" class="form-label">Correo electronico</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1"
                            placeholder="name@mail.com"/>
                    </div>
                </div>
                <div class="mb-3">
                    <div class="inputContact">
                        <label for="exampleFormControlInput1" class="form-label">Numero de telefono</label>
                        <input type="tel" class="form-control" id="exampleFormControlInput1"
                            placeholder="escribe tu numero de telefono"/>
                    </div>
                </div>
                <div class="mb-3">
                    <div class="inputContact">
                        <label for="exampleFormControlTextarea1" class="form-label">Escribe tu consulta</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                </div>
                <div class="buttonsForm">
                    <button type="button" class="btn btn-outline-dark">Borrar</button>
                    <button type="button" class="btn btn-outline-dark">Enviar</button>
                </div>
            </div>
        </form>


      </div>
    </>
  );
};
