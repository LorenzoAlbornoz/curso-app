import React from "react"
import { Navigate, Outlet } from "react-router-dom"
// el navigate, es un componenete al que le puedo indicar donde navegar y el outlet es un compenente que me renderiza elementos hijos 
import jwtDecode from "jwt-decode"

// es una funcion opcional 
const useAuth = () => {
    const token = localStorage.getItem("token")
    const decode = jwtDecode(token)
    console.log(decode)
}

// creamos el componente
const PrivateRoutes = () => {
    useAuth()
    // trae del localstorage el token
    const isAuth = localStorage.getItem("token")
    // si isauth existe el componente outlet renderiza los elementos hijos de todas las rutas privadas, caso contrario navigate redirije a la pagina de login
    return isAuth ? <Outlet/> : <Navigate to="/login"/>
}

export default PrivateRoutes