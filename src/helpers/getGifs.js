export const getGifs = async(category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=rzQp8Dd330hH6Z0uRUYAPCO5jKuqgOEf&q=${ category }&limit=10`;
  const resp = await fetch(url);
  // console.log(resp);
  const { data } = await resp.json();
  // console.log(data);

  const gifs = data.map(img => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));

  return gifs;
}
