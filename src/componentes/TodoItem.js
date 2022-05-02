import React from 'react';
import '../estilosCSS/TodoItem.css';
import { RiDeleteBin5Fill } from "react-icons/ri";
import { GrCheckmark } from "react-icons/gr";

function TodoItem(props) {
  return (
    <li className="TodoItem">
      <span
        className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
        onClick={props.onComplete}
      >
        <GrCheckmark className='tarea-icono' />        
      </span>
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>
      <span
        className="Icon Icon-delete"
        onClick={props.onDelete}
      >
        <RiDeleteBin5Fill className='tarea-icono' />        
      </span>
    </li>
    
  );
}

export { TodoItem };
