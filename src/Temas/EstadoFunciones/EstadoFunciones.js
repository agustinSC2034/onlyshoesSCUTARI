import {useState} from 'react';

export const EstadoFunciones = ()=>{
    const [apellido, setApellido] = useState("Perez");

    const cambiarApellido = ()=>{
        console.log('funcion llamada');
        setApellido("Mejias")
    }

    return(
        <div>
            <p>estado en funciones</p>
            <p><span style={{ color: "red" }}>{apellido}</span></p>
            <button onClick={cambiarApellido}>cambiar estado</button>
        </div>
    )
}