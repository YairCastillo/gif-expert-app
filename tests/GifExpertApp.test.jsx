const { render, screen, fireEvent } = require("@testing-library/react");
const { GifExpertApp } = require("../src/GifExpertApp");

describe('Pruebas en GifExpertApp', () => {

  test('Debe hacer match con el snapshot', () => {
    const { container } = render(<GifExpertApp />);
    expect(container).toMatchSnapshot();
  })

  test('Debe agregar una nueva categoria', () => {
    render(<GifExpertApp />);

    const inputValue = 'Mass Effect';
    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    fireEvent.input( input, { target: { value: inputValue } });
    fireEvent.submit( form );

    screen.debug();
    expect(screen.getAllByRole('heading', { level: 3 }).length).toBe(2);
  });

  test('No debe agregar una categoria repetida', () => {
    render(<GifExpertApp />);

    const inputValue = 'One Punch';
    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    fireEvent.input( input, { target: { value: inputValue } });
    fireEvent.submit( form );

    screen.debug();
    expect(screen.getAllByRole('heading', { level: 3 }).length).toBe(1);
  });

  test('Debe eliminar categoria', () => {
    render(<GifExpertApp/>);
    
    const deleteButton = screen.getByRole('button');

    fireEvent.click(deleteButton);

    screen.debug();
    expect(screen.queryAllByRole('heading', { level: 3 }).length).toBe(0);
  })
});
