import React from "react";
import "../css/navigation.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";

const Navigation = () => {
  const isLogged = localStorage.getItem("token")
  const navigate = useNavigate()

  const logOut = () => {
    localStorage.removeItem("token")
    navigate("/login")
  }
  return (
    <Navbar expand="lg" bg="light" className="nav-header">
      <div className="container">
        <Link className="items me-4">Cursos App</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link className="items me-3" to="/Home">
              Inicio
            </Link>
            <Link className="items me-3" to="/cursos">
              Cursos
            </Link>
            {
              isLogged ? (<button className="items me-3" onClick={logOut}>Cerrar Sesión</button>) : (
                <>
                  <Link className="items me-3" to="/login">Iniciar Sesión</Link>
                  <Link className="items me-3" to="/registro">Registro</Link>
                </>
              )
            }

          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default Navigation;
