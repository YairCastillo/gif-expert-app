import { useState } from 'react';

// Esta importacion haciendo referencia solo a la carpeta components, busca el archivo de barril (index)
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

  // Cuando se necesita almacenar informacion y esa informacion modifica el HTML, usualmente se utiliza algun hook de React para mantener el estado, por ejemplo useState:
  const [categories, setCategories] = useState([ 'One Punch' ]);

  // Los hooks trabajan en React basados en su posicion, por esto NO deben ponerse hooks dentro de condicionales.

  const onAddCategory = ( newCategory ) => {
    if( categories.includes(newCategory) ) return;

    // En React, hasta donde es posible, se debe evitar hacer mutaciones, y lo que hace push es mutar el objeto (el arreglo "categories" original). Por ahora evitarlo
    // categories.push("Valorant");

    // En su lugar se puede usar:
    setCategories([newCategory, ...categories]);
    // ó
    // setCategories(cat => [cat, ...categories]);
  }

  const onDeleteCategory = (categoryToDelete) => {
    setCategories(categories.filter( category => category != categoryToDelete ));
  }

  return (
    <>
      {/* titulo */}
      <h1>Gif Expert App</h1>

      {/* input */}
      <AddCategory
        //  A pesar de que esto funciona, oculta la implementacion de lo que hace y es un poco mas dificil comprender cómo funciona el componente:
        // setCategories={ setCategories }

        onNewCategory={ (evento) => onAddCategory(evento) }
      />
      {/* <button onClick={ onAddCategory }>Agregar</button> */}

      {/* listado de GIFs */}

      {/* Cuando se hace este tipo de construcciones dinamicas (p. ej. con map) se necesita proporcionar una key unica para cada elemento*/}
      {
        categories.map(category => (
          <GifGrid
            key={ category }
            category={ category }
            onDelete={ onDeleteCategory }
          />
        ))
      }
      {/* Para evitar las keys duplicadas, se podria pensar en utilizar el indice del map como el key, pero eso NO es recomendable en React, en su lugar utilizar otro identificador unico en la iteracion */}

    </>
  )
}

//rzQp8Dd330hH6Z0uRUYAPCO5jKuqgOEf
