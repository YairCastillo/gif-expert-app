import { fireEvent, render, screen } from '@testing-library/react'
import { AddCategory } from '../../src/components';

describe('pruebas en AddCategory', () => {

  test('Debe de cambiar el valor de la caja de texto', () => {
    // Se crea el sujeto de pruebas
    render(<AddCategory onNewCategory={ () => {} } />);

    // Extraemos el input
    const input = screen.getByRole('textbox');

    // Disparamos el evento de esta forma:
    fireEvent.input( input, { target: { value: 'Saitama'} } );

    screen.debug();

    // Asercion de lo que estamos esperando que suceda despues del evento
    expect(input.value).toBe('Saitama');
  });

  test('Debe de llamar onNewCategory si el input tiene un valor de 2 o mas caracteres', () => {
    const inputValue = 'Saitama';

    // Lo siguiente sigue siendo una funcion, pero denominada Mock. Un mock es una simulacion de una funcion
    const onNewCategory = jest.fn();

    render(<AddCategory onNewCategory={ onNewCategory } />);

    const input = screen.getByRole('textbox');
    // Para el form, es necesario agregar un aria-label
    const form = screen.getByRole('form');

    fireEvent.input( input, { target: { value: inputValue } } );
    fireEvent.submit( form );

    expect(input.value).toBeFalsy;
    // screen.debug();

    // Con lo siguiente, si la funcion no se llama ni una vez en el componente dara error (si no se pasa como propiedad en la prueba tambien dara error porque no se estaria utilizando esa funcion en el componente)
    expect( onNewCategory ).toHaveBeenCalled();
    // o una cantidad especifica de veces
    expect( onNewCategory ).toHaveBeenCalledTimes(1);

    // Lo siguiente esta evaluando que la funcion se mande a llamar con el valor de la caja de texto, NO se necesita evaluar que la funcion que venia del padre haga algo, NO es el objetivo de esta prueba
    expect( onNewCategory ).toHaveBeenCalledWith( inputValue );
  });

  test('No debe de llamar el onNewCategory si el input esta vacio o si tiene menos de 2 caracteres', () => {
    const inputValue = 'S';
    const onNewCategory = jest.fn();

    render(<AddCategory onNewCategory={ onNewCategory } />);

    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    fireEvent.input( input, { target: { value: inputValue } } );
    fireEvent.submit( form );

    expect( onNewCategory ).not.toHaveBeenCalled();
  });
});
