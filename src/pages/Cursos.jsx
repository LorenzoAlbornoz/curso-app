import React from "react";
import { cursos } from "../helpers/data";
import CursoItem from "../components/CursoItem";
import "../css/cursos.css";

const Cursos = () => {
  return (
    <div className="background-curso">
      <div className="containter">
        <div className="row">
          <div className="col text-center my-5">
            <h3>Conoce nuestros cursos</h3>
          </div>
        </div>
        <div className="row">
          {
          cursos.map((curso) => (
            <CursoItem curso={curso} key={curso.id} />
          ))
          }
        </div>
      </div>
    </div>
  );
};

export default Cursos;
