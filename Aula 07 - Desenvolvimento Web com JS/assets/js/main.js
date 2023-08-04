function convertPokemonToHtml(pokemon) {
  return `
  <li class="pokemon ${pokemon.type}">
    <span class="number">#${pokemon.number}</span>
    <span class="name">${pokemon.name}</span>
    <div class="detail">
      <ol class="types">
        ${pokemon.types.map((type) => `<li class="type">${type}</li>`).join("")}
      </ol>
      <img
        src="${pokemon.photo}"
        alt="${pokemon.name}"
      />
    </div>
  </li>
  `;
  //nesta função estamos convertendo o pokemon obtido em json para uma li para colocarmos no html
}

const pokemonList = document.getElementById("pokemonList"); //estou indo no HTML renderizado no browser, pegando a lista de pokemons pelo Id e atribuindo isto em uma variável, podendo ser manipulável.

pokeApi.getPokemons().then((pokemons = []) => {
  //colocamos por default que o parâmetro pokemons seja uma lista vazia para garantir que venha uma lista

  pokemonList.innerHTML += pokemons.map(convertPokemonToHtml).join("");
  //pega uma lista de pokemons, mapeia os pokemons e converte em uma lista de li (html); agora junta todos estes li's sem separador nenhum.
  // isto tudo vai virar um html novo, e por fim estou concatenando com um HTML antigo que já tinha.

  //debugger; //colocando o debugger aqui, consequimos debugar o código no browser., vira um breakpoint
});
