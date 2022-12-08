import { useState } from "react";
import PropTypes from 'prop-types';

export const AddCategory = ( {onNewCategory} ) => {
  const [inputValue, setInputValue] = useState('');

  // OnChange maneja un evento, ese evento se pasa a esta funcion, y desestructuramos y extraemos solo el target
  const onInputChange = ({target}) => {
    setInputValue(target.value);
  }

  const onSubmit = (evento) => {
    // console.log(evento);
    evento.preventDefault();

    if(inputValue.trim().length <= 1) return;

    // Una de las ventajas que ofrece el useState con esta funcion es poder mandar un callback donde, en este caso, podemos tener las categorias anteriores:
    // setCategories(categories => [...categories, inputValue]);

    onNewCategory(inputValue.trim());
    setInputValue('');
  }

  return (
    <form onSubmit={ onSubmit } aria-label="form">
      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={ onInputChange }
      />
    </form>
  )
}

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired
}
