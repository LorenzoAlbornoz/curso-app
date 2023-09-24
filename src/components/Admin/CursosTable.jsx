import React, { useState } from 'react'
import { cursos } from '../../helpers/data'
import DataTable from 'react-data-table-component'
import { axiosInstance } from '../../config/axiosInstance'
import Swal from 'sweetalert2'
import ModalUpdate from './Update/ModalUpdate'

const CursosTable = ({ allCursos, getCourses }) => {
    const [show, setShow] = useState(false)
    const [datoCurso, setDatoCurso] = useState({})

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)
    const handleUpdate = (row) => {
        handleShow()
        setDatoCurso(row)
    }

    const deleteCurso = async (row) => {
           try {
          Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then(async(result) => {
            if (result.isConfirmed) {
                // row es igual al id del cursoW
                await axiosInstance.delete(`/curso/${row}`)
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
              getCourses()
            }
          })
        } catch (error) {
            console.log(error)
        } finally{
            getCourses()
        }
    }

    const columns = [
        {
            name: "Titulo",
            selector: (row) => row.title,
            sortable: true
        },
        {
            name: "Mentor",
            selector: (row) => row.mentor,
            sortable: true
        },
        {
            name: "Portada",
            selector: (row) => (
                <div>
                    <img src={row.imagen} alt={row.title} width={100} />
                </div>
            ),
            sortable: true
        },
        {
            name: "Acciones",
            selector: row => {
                return (
                    <div style={{ width: "200px", display: "flex", justifyContent: "space-between" }}>
                        <button className='btn btn-warning btn-sm mr-2' onClick={() => handleUpdate(row)}>Editar</button>
                        <button className='btn btn-danger btn-sm' onClick={() => deleteCurso(row._id)}>Borrar</button>
                    </div>
                )
            }
        }
    ]

    return (
        <>
        <DataTable
            columns={columns}
            data={allCursos}
            pagination
        />
  <ModalUpdate show={show} handleClose={handleClose} datoCurso={datoCurso} getCourses={getCourses}/>
        </>
        // la edicion de la imagen deberia ser por separado
    )
}

export default CursosTable