import { useEffect, useState } from "react";

import axios from "axios";
import SearchBar from "../components/SearchBar";
import HeroCard from "../components/HeroCard";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

const publicKey = "f2ff86546e04043541b1edfd4ffb004d"; //API MARVEL

const hash = "7657f6e6bf5a5035c2ffcc149368a412"; //API MARVEL

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: "black",
    height: "100vh",
    overflowY: "scroll",
  },
}));

const Heroes = () => {
  const [heroes, setHeroes] = useState([]);
  const [query, setQuery] = useState("");

  const handleQuery = (event) => {
    const { value } = event.target;
    setQuery(value);
  };

  useEffect(() => {
    //Conection APi, get data heroes
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

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          spacing={4}
        >
          <Grid item xs={12}>
            <SearchBar query={query} onChange={handleQuery} />
          </Grid>
          <Grid container spacing={4}>
            {heroes.map((hero) => (
              <Grid key={hero.id} item xs={12} sm={6} md={4}>
                <HeroCard hero={hero} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Heroes;
