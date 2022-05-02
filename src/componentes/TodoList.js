import React from 'react';
import '../estilosCSS/TodoList.css'

function TodoList(props) {
  return (
    <section>
      <ol>
        {props.children}
      </ol>
    </section>
  );
}

export { TodoList };
