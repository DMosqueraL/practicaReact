import React from 'react';
import { TodoContext } from './TodoContext';
import '../estilosCSS/TodoSearch.css';

function TodoSearch() {
  const { searchValue, setSearchValue } = React.useContext(TodoContext);
  
  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };

  return (
    <input
      className="TodoSearch"
      placeholder="Escribe aquí tu búsqueda"
      value={searchValue}
      onChange={onSearchValueChange}
    />
  );
}

export { TodoSearch };
