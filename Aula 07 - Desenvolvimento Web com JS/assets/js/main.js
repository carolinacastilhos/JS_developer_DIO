const pokemonList = document.getElementById("pokemonList"); //estou indo no HTML renderizado no browser, pegando a lista de pokemons pelo Id e atribuindo isto em uma variável, podendo ser manipulável.
const loadMoreButton = document.getElementById("loadMoreButton");

const maxRecords = 151;
const limit = 10;
let offset = 0;

function loadPokemonItens(offset, limit) {
  pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
    //colocamos por default que o parâmetro pokemons seja uma lista vazia para garantir que venha uma lista
    const newHtml = pokemons
      .map(
        (pokemon) =>
          `
  <li class="pokemon ${pokemon.type}">
    <span class="number">#${pokemon.number}</span>
    <span class="name">${pokemon.name}</span>
    <div class="detail">
      <ol class="types">
        ${pokemon.types
          .map((type) => `<li class="type ${type}">${type}</li>`)
          .join("")}
      </ol>
      <img
        src="${pokemon.photo}"
        alt="${pokemon.name}"
      />
    </div>
  </li>
  `
      )
      .join("");

    pokemonList.innerHTML += newHtml;
    //pega uma lista de pokemons, mapeia os pokemons e converte em uma lista de li (html); agora junta todos estes li's sem separador nenhum.
    // isto tudo vai virar um html novo, e por fim estou concatenando com um HTML antigo que já tinha.

    //debugger; //colocando o debugger aqui, consequimos debugar o código no browser., vira um breakpoint
  });
}

loadPokemonItens(offset, limit);

loadMoreButton.addEventListener("click", () => {
  offset += limit;

  const qtdRecordNextPage = offset + limit;

  if (qtdRecordNextPage >= maxRecords) {
    const newLimit = maxRecords - offset;
    loadPokemonItens(offset, newLimit);
    loadMoreButton.parentElement.removeChild(loadMoreButton);
  } else {
    loadPokemonItens(offset, limit);
  }
});
