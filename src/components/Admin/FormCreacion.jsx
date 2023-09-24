// import { categorias } from '../../helpers/data'
import { axiosInstance } from '../../config/axiosInstance'
import { useEffect, useState } from 'react'


const FormCreacion = ({getCourses}) => {
    const [categories, setCategories] = useState([])
    const [imgFile, setImgFile] = useState([])
    const [formDatos, setFormDatos] = useState({
        title: "",
        detalle: "",
        video: "",
        mentor: "",
        categoria: ""
    })

    const getCategorias = async () => {
        try {
            const resp = await axiosInstance.get("/categorias")
        setCategories(resp.data.categorias)
        } catch (error) {
            console.log(error)
        }
        
    }

    useEffect(() => {
        getCategorias()
    }, [])
    const handleChangeDatos = (e) => {
        setFormDatos({
            ...formDatos,
            [e.target.name]: e.target.value
        })
    }
    const handleImage = (e) => {
        setImgFile([...e.target.files])
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const formData = new FormData()
            formData.append("title", formDatos.title)
            formData.append("imagen", imgFile[0])
            formData.append("detalle", formDatos.detalle)
            formData.append("video", formDatos.video)
            formData.append("mentor", formDatos.mentor)
            formData.append("img_mentor", formDatos.img_mentor)
            formData.append("categoria", formDatos.categoria)
            const resp = await axiosInstance.post("/curso", formData, {
                headers: {
                    'Content-Type': "multipart/form-data"
                }
            })
            console.log(resp.data)
        } catch (error) {
            console.log(error)
            // siempre al final ejecuta esta funcion y actualiza
        }finally{
            getCourses()
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className='form-group mb-3'>
                    <label htmlFor="nombre">Titulo</label>
                    <input type="text" className="form-group" id="title" name="title" onChange={handleChangeDatos} />
                </div>
                <div className='form-group mb-3'>
                    <label htmlFor="nombre">Imagen del curso</label>
                    <input type="file" className="form-group" id="imagen" name="imagen" onChange={handleImage} />
                </div>
                <div className='form-group mb-3'>
                    <label htmlFor="nombre">Detalle del curso</label>
                    <input type="text" className="form-group" id="detalle" name="detalle" onChange={handleChangeDatos} />
                </div>
                <div className='form-group mb-3'>
                    <label htmlFor="nombre">URL video</label>
                    <input type="text" className="form-group" id="video" name="video" onChange={handleChangeDatos} />
                </div>
                <div className='form-group mb-3'>
                    <label htmlFor="nombre">Nombre Mentor</label>
                    <input type="text" className="form-group" id="mentor" name="mentor" onChange={handleChangeDatos} />
                </div>
                <div className='form-group mb-3'>
                    <label htmlFor="nombre">URL Foto mentor <span>(opcional)</span></label>
                    <input type="text" className="form-group" id="img_mentor" name="img_mentor" onChange={handleChangeDatos} />
                </div>
                <div className='form-group mb-3'>
                    <label htmlFor="nombre">Categoria</label>
                    <select type="text"  name="categoria" className='form-control' onChange={handleChangeDatos}>
                        {categories.map((categoria, index) => (
                            <option key={categoria._id} value={categoria._id}>{categoria.name}</option>
                        ))}
                    </select>
                </div>
                <div className='form-group'>
                    <button type='submit' className='btn btn-primary'>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default FormCreacion