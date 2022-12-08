import { GifItem } from "../../src/components/GifItem";
const { render, screen } = require("@testing-library/react");

describe('Pruebas en GifItem', () => {

  const title = 'HAPPY DAY!!!';
  const url = 'https://www.google.com/';

  test('Debe de hacer match con el snapshot y existir el title y url', () => {
    const { container } = render( <GifItem title={title} url={url} /> );
    expect(container).toMatchSnapshot();

    expect( screen.getByText(title) ).toBeTruthy();

    const image = document.querySelector('img');
    expect(image.src).toContain(url);
  });

  test('Debe mostrar la imagen con el URL y el ALT indicado', () => {
    render( <GifItem title={title} url={url} /> );
    //screen.debug();

    // Podriamos hacer esto:
    // expect(screen.getByRole('img').src).toBe(url);
    // expect(screen.getByRole('img').alt).toBe(title);
    // o mejor:
    const {alt, src} = screen.getByRole('img');
    expect(alt).toBe(title);
    expect(src).toBe(url);
  });

  test('Debe mostrar el titulo en el componente', () => {
    render( <GifItem title={title} url={url} /> );
    expect(screen.getByText(title)).toBeTruthy();
  });
})
