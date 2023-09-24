import React, { useEffect, useState } from 'react'
import { axiosInstance } from '../../../config/axiosInstance'

const FormUpdate = ({ datoCurso, getCourses}) => {
    const [categories, setCategories] = useState([])
    const { title, detalle, video, mentor, img_mentor, categoria } = datoCurso
    const [formDatos, setFormDatos] = useState({
        title,
        detalle,
        video,
        mentor,
        img_mentor,
        categoria
    })

    const handleChangeDatos = (e) => {
        setFormDatos({
            ...formDatos,
            [e.target.name]: e.target.value
        })
    }

    const getCategorias = async () => {
            const resp = await axiosInstance.get("/categorias")
            setCategories(resp.data.categorias)
    }

    useEffect(() => {
        getCategorias()
    }, [])

    const handletSubmit = async (e) => {
        e.preventDefault()
        try {
           await axiosInstance.put(`/curso/${datoCurso._id}`, formDatos)
        } catch (error) {
          console.log(error)  
        }finally{
         getCourses()
        }
    }

    return (
        <div>
            <form onSubmit={handletSubmit}>
                <div className='form-group mb-3'>
                    <label htmlFor="nombre">Titulo</label>
                    <input type="text" className="form-group" id="title" name="title" value={formDatos.title} 
                    onChange={handleChangeDatos}/>
                </div>
                {/* <div className='form-group mb-3'>
            <label htmlFor="nombre">Imagen del curso</label>
            <input type="file" className="form-group" id="imagen" name="imagen"  />
        </div> */}
                <div className='form-group mb-3'>
                    <label htmlFor="nombre">Detalle del curso</label>
                    <input type="text" className="form-group" id="detalle" name="detalle" value={formDatos.detalle} 
                    onChange={handleChangeDatos}/>
                </div>
                <div className='form-group mb-3'>
                    <label htmlFor="nombre">URL video</label>
                    <input type="text" className="form-group" id="video" name="video" value={formDatos.video} 
                    onChange={handleChangeDatos}/>
                </div>
                <div className='form-group mb-3'>
                    <label htmlFor="nombre">Nombre Mentor</label>
                    <input type="text" className="form-group" id="mentor" name="mentor" value={formDatos.mentor} 
                    onChange={handleChangeDatos}/>
                </div>
                <div className='form-group mb-3'>
                    <label htmlFor="nombre">URL Foto mentor <span>(opcional)</span></label>
                    <input type="text" className="form-group" id="img_mentor" name="img_mentor" value={formDatos.img_mentor} 
                    onChange={handleChangeDatos}/>
                </div>
                <div className='form-group mb-3'>
                    <label htmlFor="nombre">Categoria</label>
                    <select name="categoria" className='form-control' value={formDatos.categoria._id} onChange={handleChangeDatos}>
                        {categories.map((categoria, index) => (
                            <option key={categoria._id} value={categoria._id}>
                                {categoria.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div className='form-group'>
                    <button type='submit' className='btn btn-primary'>Modificar</button>
                </div>
            </form>
        </div>
    )
}

export default FormUpdate