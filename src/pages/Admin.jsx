import React, { useEffect, useState } from "react";
import CursosTable from "../components/Admin/CursosTable";
import ModalCreacion from "../components/Admin/ModalCreacion";
import { axiosInstance } from "../config/axiosInstance";


const Admin = () => {
  const [show, setShow] = useState(false);
  const [allCursos, setAllCursos] = useState([])

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

const getCourses = async () => {
  try {
     const resp = await axiosInstance.get("/cursos")
  console.log(resp.data)
  setAllCursos(resp.data.cursos)
  } catch (error) {
    console.log(error)
  }
}

useEffect(() =>{
  getCourses()
}, [])

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h2>Admin</h2>
          <button className="btn btn-outline-primary" onClick={handleShow}>
            Agregar Curso
          </button>
          <hr />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h3>Administrador de cursos</h3>
          <hr />
        </div>
      </div>
      <div className="row">
        <CursosTable allCursos={allCursos} getCourses={getCourses}/>
      </div>
      <ModalCreacion show={show} handleClose={handleClose} getCourses={getCourses}/>
    </div>
  );
};

export default Admin;
