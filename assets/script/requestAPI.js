const fetchAPI = async () => {
  const response = await (
    await fetch('https://pokeapi.co/api/v2/pokemon?limit=9&offset=0')
  ).json();
  return response.results;
};

const requestPokemon = async (url) => {
  const response = await (await fetch(url)).json();
  const { sprites, types } = response;

  console.log(types[0].type.name);

  return {
    image: sprites.other['home'].front_default,
    type: types[0].type.name,
  };
};