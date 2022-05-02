import React from 'react';
import { TodoContext } from './TodoContext';
import '../estilosCSS/TodoForm.css';

function TodoForm() {
  const [newTodoValue, setNewTodoValue] = React.useState('');
  const {
    addTodo,
    setOpenModal,
  } = React.useContext(TodoContext);
  
  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };
  const onCancel = () => {
    setOpenModal(false);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Escribe una nueva tarea</label>
      <textarea
        value={newTodoValue}
        /*Mejora: 'required' permite que no se agreguen tareas en blanco
        obligando al usuario a escribir una tarea o cancelar dicha acción*/
        required 
        onChange={onChange}
        placeholder="¡Qué deseo hacer!"
      />
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          className="TodoForm-button TodoForm-button--cancel"
          onClick={onCancel}
          >
          Cancelar
        </button>
        <button
          type="submit"
          className="TodoForm-button TodoForm-button--add"
        >
          Agregar Tarea
        </button>
      </div>
    </form>
  );
}

export { TodoForm };
