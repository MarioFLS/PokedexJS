const pokemonList = document.getElementById('pokemonList');

const createListPokemon = async () => {
  const pokemons = await fetchAPI();

  await Promise.all(
    pokemons.map(({ name, url }, index) => {
      const divPokemon = document.createElement('div');
      const titlePokemon = document.createElement('h3');
      const numberPokemon = document.createElement('h3');
      const imgPokemon = document.createElement('img');

      requestPokemon(url).then((e) => {
        imgPokemon.src = e.image;
        divPokemon.className = e.type;
        divPokemon.classList.add('pokemon');
      });

      numberPokemon.innerHTML = index + 1;
      numberPokemon.className = 'number';
      titlePokemon.className = 'name';
      titlePokemon.innerHTML = name;

      divPokemon.appendChild(titlePokemon);
      divPokemon.appendChild(numberPokemon);
      divPokemon.appendChild(imgPokemon);
      pokemonList.appendChild(divPokemon);
    })
  );
};

window.onload = async () => createListPokemon();
