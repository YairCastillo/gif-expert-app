// import { useState, useEffect } from "react";
import { GifItem } from "./GifItem";
// import { getGifs } from "../helpers/getGifs";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { DeleteCategory } from "./DeleteCategory";

export const GifGrid = ({ category, onDelete }) => {
  // Movido a cutom hook useFetchGifs:
  // const [images, setImages] = useState([]);

  // const getImages = async() => {
  //   const newImages = await getGifs(category);
  //   setImages(newImages);
  // }

  // Esto (la ejecucion de una funcion) NO debe hacerse dentro de un functional component porque vuelve ejecutarla (en este caso vuelve a hacer la peticion http) cada vez que cambia el estado y se vuelve a renderizar
  // getGifs(category);

  // useEffect es un hook de React que sirve para disparar efectos secundarios (un proceso que se ejecuta cuando algo suceda). useEffect NO puede devolver otra cosa que no sea una funcion. Para el estado de las imagenes (en este caso el getGifs devuelve una promesa) podriamos usar then u otra funcion
  // Movido a cutom hook useFetchGifs:
  // useEffect( () => {
  //   getImages();
  // }, []);
  // Dejar el arreglo de dependecias vacio significa que solo se ejecutara cuando se crea por primera vez el componente

  // Para todo lo anterior se puede utilizar un custom hook
  const { images, isLoading } = useFetchGifs( category );
  // console.log(isLoading);

  return (
    <>
      <div className="categoria-encabezado-container">
        <h3>{ category }</h3>
        <DeleteCategory onDelete={ onDelete } category={category} />
      </div>

      {
        // if corto con una sola condicion (AND logico)
        isLoading && (<h4>Cargando...</h4>)
      }
      

      {/* className es el sinonimo de class si fuera HTML. Como es JS, "class" es una palabra reservada */}
      <div className="card-grid">
        {
          images.map((image) => (
            <GifItem
              key={image.id}

              // Con esto, todas las propiedades que tenga el image, se esparcen en el GifItem, ideal para cuando se tienen/necesitan muchas propiedades
              { ...image }
            />
          ))
        }
      </div>
    </>
  )
}
