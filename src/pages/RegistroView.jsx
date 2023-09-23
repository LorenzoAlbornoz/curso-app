import React from "react";
import Registro from "../components/Registro";
import home1 from '../assets/images/home1.png'

const RegistroView = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="row mb-3">
          <div className="col w-100 offset-3">
            <div className="card-registro">
              <img src={home1} className="card-img-top" alt="portada" />
              <div className="card-body">
                <h3 className="card-title text-center mb-3">
                  Crea tu Cuenta gratis
                </h3>
                <Registro />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegistroView;
