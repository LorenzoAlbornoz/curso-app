import React from "react";
import "../css/registro.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { REGISTRO_SCHEMA } from "../helpers/validationsSchemas";


const Registro = () => {
  const {
    register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(REGISTRO_SCHEMA),
  });
  const onSubmit = (data) => {
    console.log(data);
    alert("El formulario se ha enviado")
    reset()
  };
  console.log(errors)

  const handlePaste = (e) => {
    e.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group mb/2">
        <label className="text-muted">Correo Electrónico</label>
        <input
          type="usuario"
          className="form-control"
          name="correo"
          {...register("username")}
        //   value={formValues.usuario}
        //   onChange={handleChange}
        />
      </div>
      <div className="form-group mb/2">
        <label className="text-muted">Nombre Completo</label>
        <input
          type="name"
          className="form-control"
          name="name"
          {...register("name")}
        //   value={formValues.usuario}
        //   onChange={handleChange}
        />
      </div>
      <div className="form-group mb-2">
        <label className="text-muted">Contraseña</label>
        <input
          type="password"
          className="form-control"
          name="password"
          {...register("password")}
        //   value={formValues.password}
        //   onChange={handleChange}
        />
      </div>
      <div className="form-group mb-2">
        <label className="text-muted">Repetir Contraseña</label>
        <input
          type="password"
          className="form-control"
          onPaste={handlePaste}
          name="re-password"
          {...register("re_password")}
        //   value={formValues.password}
        //   onChange={handleChange}
        />
      </div>
      <button type="submit" className="btn btn-info btn-block w-100 mt-3">
        Registrarse
      </button>
    </form>
  );
};

export default Registro;
