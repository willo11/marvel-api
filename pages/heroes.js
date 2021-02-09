import { useEffect, useState } from "react";

import axios from "axios";
import SearchBar from "../components/SearchBar";
import HeroCard from "../components/HeroCard";

const publicKey = "f2ff86546e04043541b1edfd4ffb004d";

const hash = "7657f6e6bf5a5035c2ffcc149368a412";

const Heroes = () => {
  const [heroes, setHeroes] = useState([]);
  const [query, setQuery] = useState("");

  const handleQuery = (event) => {
    const { value } = event.target;
    setQuery(value);
  };

  useEffect(() => {
    let url = "";
    if (query === "")
      url = `http://gateway.marvel.com/v1/public/characters?ts=1&limit=12&apikey=${publicKey}&hash=${hash}`;
    else
      url = `http://gateway.marvel.com/v1/public/characters?nameStartsWith=${query}&ts=1&limit=12&apikey=${publicKey}&hash=${hash}`;
    axios
      .get(url, {})
      .then((data) => {
        const {
          data: {
            data: { results },
          },
        } = data;
        console.log(results);
        setHeroes(results);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [query]);

  return (
    <div>
      <SearchBar query={query} onChange={handleQuery} />
      {heroes.map((hero) => (
        <HeroCard hero={hero} key={hero.id} />
      ))}
    </div>
  );
};

export default Heroes;
