import { Fragment } from "react";
import "../estilosCSS/Encabezado.css"

const Encabezado = (props) => {
  return (
    <Fragment>
      <div className="contenedor-encabezado">
        <img
              className="imagen-encabezado"
              src="https://avatars.githubusercontent.com/u/61291067?v=4"
              alt="Logo Sofka U"
        />
        <div className="contenedor-texto-encabezado">
          <p className="nombre-lista-tareas">
            <strong>{props.titulo}</strong>
          </p>
          <p className="categoria-tareas"> Categoría: {props.categoria}</p>
        </div>
      </div>
    </Fragment>
  );
};

export default Encabezado;
