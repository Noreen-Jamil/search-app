const endPoint = {
    names: "https://pokeapi.co/api/v2/pokemon"
  };
  
  export const getPokemonList = () => {
    return fetch(endPoint.names)
      .then((response) => response.json())
      .then((data) => data);
  };
  