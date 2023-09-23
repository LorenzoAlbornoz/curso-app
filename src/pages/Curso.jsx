import React, { useEffect, useState } from 'react'
import CursoDetail from '../components/CursoDetail'
import ProgramDetail from '../components/ProgramDetail'
import { useParams } from 'react-router-dom'
import { cursos, programas } from '../helpers/data'
import '../css/curso.css'


const Curso = () => {
    const [user,setUser] = useState([{
        "nombre": "martin",
        "email": "martincho111986@gmail.com",
        "password": "Mar155273624",
        "img": "https://cdn-icons-png.flaticon.com/512/149/149071.img",
        "id": 1,
        "role": "admin"

    }])
    const [curso, setCurso] = useState({
        data:[],
        loading:true
    })
    const [programa, setPrograma] = useState({
        data: [],
        loading: true,
      });

const {id} = useParams()

const getCurso = () =>{
    const cursoFiltered = cursos.filter(curso => curso.id === parseInt(id))
    setCurso({
        data:cursoFiltered,
        loading: false
    })
}

const getProgramFiltered = () => {
    const program = programas.filter(programa => programa.id_curso === parseInt(id))
setPrograma({
  data:program,
  loading: false
})
}

useEffect(() => {
  getCurso()
  getProgramFiltered()
}, [])
  return (
    <div className='mb-4'>
     {
        user.length > 0 ? 
        <>
        <CursoDetail curso={curso}/>
        <ProgramDetail programa={programa}/>
        </>
        :
        <div className="alert alert-danger w-100 text-center" role='alert'>
            Para ver esta información debe iniciar sesión
        </div>
     }
    </div>
  )
}

export default Curso