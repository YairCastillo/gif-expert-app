import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

// El comportamiento de un hook se evalua basado en su return o en las acciones que las funciones van a tener

describe('Pruebas en hook useFetchGifs', () => {
  test('Debe de regresar el estado inicial', () => {
    // Lo siguiente no es posible porque un hook necesitan parte del ciclo de vida de los componentes de React, solo se pueden llamar dentro de un functional component
    // useFetchGifs(); 

    const { result } = renderHook( () => useFetchGifs('One Punch') );
    console.log(result);

    const { images, isLoading } = result.current;

    expect(images.length).toBe(0);
    expect(isLoading).toBeTruthy();
  });

  // Para este caso debemos esperar la siguiente accion (que se carguen las imagenes). Para ello se utiliza waitFor, el cual es una promesa
  test('should de retornar un arreglo de imagenes y el isLoading en false', async() => {
    const { result } = renderHook( () => useFetchGifs('One Punch') );

    await waitFor(
      () => expect( result.current.images.length ).toBeGreaterThan(0)
    );

    const { images, isLoading } = result.current;

    expect(images.length).toBeGreaterThan(0);
    expect(isLoading).toBeFalsy();
  });
});
