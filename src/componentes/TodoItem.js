import React from 'react';
import '../estilosCSS/TodoItem.css';
import { RiDeleteBin5Fill } from "react-icons/ri";
import { GrCheckmark } from "react-icons/gr";
import { FaEdit } from "react-icons/fa";

function TodoItem(props) {
  return (
    <li className="TodoItem">
      <input
        title="Completada"
        type="checkbox"
        className={`Icon Icon-check ${props.completed}`}
        checked={props.completed}
        onChange={props.onComplete}
      />
        <GrCheckmark className='tarea-icono' />        
      {/* </input> */}
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>
      <span
        className="Icon Icon-edit"
        onClick={props.onEdit}
      >
        
        <FaEdit className='tarea-icono' title="Editar" type="submit" />        
      </span>
      <span
        className="Icon Icon-delete"
        onClick={props.onDelete}
      >
        <RiDeleteBin5Fill className='tarea-icono' title="Eliminar" />        
      </span>
    </li>
    
  );
}

export { TodoItem };
