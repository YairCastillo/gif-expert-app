// Hook Personalizado

import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

// Un hook no es mas que una funcion que regresa algo

// A diferencia de un functional component que recibe las props, aqui se puede recibir el argumento segun sea necesario (no hace falta desestructurar/usar llaves)
export const useFetchGifs = (category) => {

  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImages = async() => {
    const newImages = await getGifs(category);
    setImages(newImages);
    setIsLoading(false);
  }

  useEffect( () => {
    getImages();
  }, []);

  return {
    // images: images,
    // En ES6 cuando una propiedad tiene el mismo nombre que la variable se puede dejar como:
    images,
    isLoading,
  }
}
