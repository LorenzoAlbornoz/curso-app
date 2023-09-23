import React from "react";
import { Link } from "react-router-dom";

const CursoItem = ({ curso }) => {
  // const navigate = useNavigate();
  // const handlClick = () => {
  //   navigate(`/curso/${curso.id}`);
  // };

  const ruta = `/curso/${curso.id}`;
  return (
    <Link to={ruta} className="link_curso col-3">
      <div>
        <div className="card">
          <img src={curso.imagen} className="card-img-top" alt="" />
          <div className="card-body">
            <h5 className="card-title">{curso.title}</h5>
            <img src={curso.img_mentor} alt={curso.mentor} />
            <span className='card-text ml-2"'>{curso.mentor}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CursoItem;
