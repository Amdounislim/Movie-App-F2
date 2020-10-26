import React, { useState } from "react";
import "./App.css";
import AddMovie from "./components/AddMovie/AddMovie";
import MoviesList from "./components/MoviesList";
import Search from "./components/search/Search";
import { moviesData } from "./data/MoviesData";

function App() {
  const [movies, setMovies] = useState(moviesData);
  const [searchInput, setSearchInput] = useState("");
  const [searchRate, setSearchRate] = useState(0);

  const addMovie = (x) => setMovies([...movies, x]);

  return (
    <div className="App">
      <Search
        setSearchInput={setSearchInput}
        searchRate={searchRate}
        setSearchRate={setSearchRate}
      />
      <MoviesList
        movies={movies.filter(
          (el) =>
            el.rating >= searchRate &&
            el.name.toUpperCase().includes(searchInput.toUpperCase().trim())
        )}
      />
      <AddMovie addMovie={addMovie} />
    </div>
  );
}

export default App;
