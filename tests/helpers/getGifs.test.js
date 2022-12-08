import { waitForElementToBeRemoved } from "@testing-library/react";
import { getGifs } from "../../src/helpers/getGifs"

describe('Pruebas en getGifs', () => {
  test('should retornar un arreglo de gifs', async() => {
    const gifs = await getGifs('One Punch');
    // console.log(gifs);
    expect(gifs.length).toBeGreaterThan(0);

    // Con lo anterior podemos asegurarnos que el arreglo tenga al menos un elemento, pero no asegura que sea un arreglo de elementos (o lo que se necesite segun el caso), para eso podemos usar:
    expect(gifs[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String),
    });
  })
})
