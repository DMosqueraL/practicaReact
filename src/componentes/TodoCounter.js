import React from 'react';
import { TodoContext } from '../componentes/TodoContext';
import '../estilosCSS/TodoCounter.css';

function TodoCounter() {
  const { totalTodos, completedTodos } = React.useContext(TodoContext);
  
  return (
    <h2 className="TodoCounter">Tienes {completedTodos} tareas completadas de {totalTodos} en total</h2>
  );
}

export { TodoCounter };
