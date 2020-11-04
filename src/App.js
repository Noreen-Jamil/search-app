import React, { useEffect, useState } from "react";
import { getPokemonList } from "./apiService";
import "./appStyle.css";

export default function App() {
  const [arrayOfPokemon, updateArrayOfPokemon] = useState([]);
  const [searchValue, UpdateSearchValue] = useState("");
  const [searchArray, setSearchArray] = useState(null);

  // useEffect(() => {
  //   getPokemonList().then((data) => {
  //     updateArrayOfPokemon(
  //       data.results.map((item) => {
  //         return item.name;
  //       })
  //     );
  //   });
  // }, []);
  useEffect(() => {
    getPokemonList().then((data) => {
      updateArrayOfPokemon(
        data.results.map((item, index) => {
          return {
            name: item.name,
            image: `https://pokeres.bastionbot.org/images/pokemon/${
              index + 1
            }.png`
          };
        })
      );
    });
  }, []);
  const showSearchData = (e) => {
    UpdateSearchValue(e.target.value);

    setSearchArray(
      arrayOfPokemon.filter((item) => {
        console.log(item.name);
        if (item.name.startsWith(e.target.value.toLowerCase())) {
          return item;
        }
      })
    );
  };

  return (
    <div className="App" id="app-container">
      <div id="logo">
        <img
          id="logo-heading"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png"
          alt="logo"
        />
        <img
          id="pokemon-img"
          src="https://i.dlpng.com/static/png/6365708_preview.png"
          alt="logo"
        />
      </div>

      <div id="search-and-heading">
        <h1 id="list-heading">List Of Pokemon</h1>
        <div id="search-container">
          <i className="fas fa-search"></i>
          <input
            placeholder="search pokemon"
            value={searchValue}
            onChange={(e) => {
              showSearchData(e);
            }}
          />
        </div>
      </div>
      <ul className="list-group list-group-flush" id="list-container">
        {searchArray === null
          ? arrayOfPokemon.map((item, index) => {
              // console.log(item);
              return (
                <li key={index} className="list-group-item">
                  <img src={item.image} alt={item.name} />
                  {item.name}
                </li>
              );
            })
          : searchArray.map((item, index) => {
              // console.log(item);
              return (
                <li key={index} className="list-group-item">
                  <img src={item.image} alt={item.name} />
                  {item.name}
                </li>
              );
            })}
      </ul>
    </div>
  );
}
