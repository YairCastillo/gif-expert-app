import { fireEvent, render, screen } from "@testing-library/react";
import { DeleteCategory } from "../../src/components/DeleteCategory";

describe('Pruebas en DeleteCategory', () => {
  test('Debe de mostrar el boton', () => {
    const category = 'Mass Effect';
    const onDelete = jest.fn();

    render( <DeleteCategory category={ category } onDelete={ onDelete } /> );

    screen.debug();
    expect(screen.getByRole('button')).toBeTruthy;
    expect(screen.getByText('Eliminar')).toBeTruthy;
  });

  test('Debe de llamar la funcion con la categoria dada al dar click al boton', () => {
    const category = 'Mass Effect';
    const onDelete = jest.fn();

    render( <DeleteCategory category={ category } onDelete={ onDelete } /> );

    const deleteButton = screen.getByRole('button');
    fireEvent.click(deleteButton);

    expect(onDelete).toHaveBeenCalledWith( category );
  });
});
