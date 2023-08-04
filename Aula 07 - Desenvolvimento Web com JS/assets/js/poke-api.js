const pokeApi = {};

function convertPokeApiDetailToPokemon(pokeDetail) {
  const pokemon = new Pokemon();
  pokemon.number = pokeDetail.order;
  pokemon.name = pokeDetail.name;

  const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name);
  const [type] = types;
  pokemon.types = types;
  pokemon.type = type;

  pokemon.photo = pokeDetail.sprites.other.dream_world.front_default;

  return pokemon;
}

pokeApi.getPokemonDetail = (pokemon) => {
  return fetch(pokemon.url)
    .then((response) => response.json())
    .then(convertPokeApiDetailToPokemon);
};

pokeApi.getPokemons = (offset = 0, limit = 5) => {
  const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;

  return (
    fetch(url)
      .then((response) => response.json())
      //o response.json() nos fornece um objeto convertível.
      // isto é a promessa do meu body convertido em json.
      .then((jsonBody) => jsonBody.results)
      //neste segundo then, já vou receber o body convertido em json, e com o .results estou pegando a lista de pokemon
      .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))
      // neste terceiro then estamos transformando a lista que pegamos acima (no segundo then) em uma nova lista que é de promessas do detalhe do pokemon já convertidas em json
      .then((detailRequests) => Promise.all(detailRequests))
      //promise.all é para esperar toda a lista de promises terminar para então realizar o próximo then
      .then((pokemonsDetails) => pokemonsDetails)
    //
  );
};

/*.finally(function () {
    console.log("Requisição concluída!");
  };*/ //tiramos o finally pq neste caso não iremos usar.

//o fetch retorna uma promise -> processamento assíncrono, que é um processamento que será executado e não temos a resposta na hora.
// por padrão o fetch usa o get.
//A promessa é a promessa de uma resposta.
// a interface de uma promisse foi baseada no bloco try, catch, finally;
// temos a promessa de alguma coisa, e quando o recurso for disponibilizado vai chamar o then, mas se der um erro chama o catch, e independente se foi try ou catch, vai pro finally.

//resumindo oq estamos fazendo:
/* estamos buscando a nossa lista de pokemons no fetch(url) do getPokemons. Isto nos traz uma response, e estamos no primeiro then convertendo para json.
pegamos a lista de pokemons e mapeamos em uma lista de requisições dos detalhes dos pokemons com o getPokemonDetail, que é um novo fetch para a url do pokemon, e convertendo a response que ele me der para json.
no 4º then estamos com esta lista e estamos esperando, com o promise.all, que todas as requisições terminem para que venha
uma lista de detalhes dos pokemons (pokemonsDetails) */
