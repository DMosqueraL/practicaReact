import React from 'react';
import '../estilosCSS/CreateTodoButton.css';

function CreateTodoButton(props) {
  const onClickButton = () => {
    props.setOpenModal(prevState => !prevState);
  };

  return (
    <button
      className="CreateTodoButton"
      onClick={onClickButton}
      title="Agreagar Tarea"
    >
      +
    </button>
  );
}

export { CreateTodoButton };
