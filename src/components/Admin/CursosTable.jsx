import React from 'react'
import { cursos } from '../../helpers/data'
import DataTable from 'react-data-table-component'


const CursosTable = () => {
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
        selector: (row) => {
            return(
                <div style={{width:"200px", display:"flex", justifyContent:"space-between"}}>
                <button className='btn btn-warning btn-sm mr-2'>Editar</button>
                <button className='btn btn-danger btn-sm'>Borrar</button>  
                </div>
            )
        },
            sortable:true
    }
    ]

  return (
    <DataTable
    columns={columns}
    data={cursos}
    pagination
    />
  )
}

export default CursosTable