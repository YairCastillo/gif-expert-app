import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components";

// Para hacer un mock de un custom hook:
// 1. Importar el hook
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

// 2. Hacer un mock completo a partir del path. Jest permite crear un mock de un módulo entero (una biblioteca instalada en el proyecto o un archivo en el código fuente) 
jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en GifGrid', () => {
  const category = 'One Punch';
  const onDelete = jest.fn();

  test('Debe de mostrar el loading inicialmente', () => {

    // 3. Especificar al test suit como va a funcionar el hook
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });

    render(<GifGrid category={ category } onDelete={ onDelete } />);
    screen.debug();

    expect(screen.getByText( 'Cargando...' ));
    expect(screen.getByText( category ));
  });

  test('Debe de mostrar items cuando se cargan las imagenes con useFetchGifs', () => {

    const gifs = [
      {
        id: 'abc',
        title: 'one punch',
        url: 'https://localhost/onepunch.jpg'
      },
      {
        id: '123',
        title: 'goku',
        url: 'https://localhost/goku.jpg'
      },
    ]

    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false,
    });

    render(<GifGrid category={ category } onDelete={ onDelete } />);
    screen.debug();

    expect(screen.getAllByRole('img').length).toBe(2);
  });
});
