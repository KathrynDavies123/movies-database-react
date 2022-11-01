import './App.css';
import { useState } from 'react';
import movies from './movies';
import Moviecard from './Components/Moviecard';

function App() {
  const [sortBy, setSortBy] = useState("yearAsc");
  function getCompareFn() {
    if (sortBy === "yearAsc") {
      return (a, b) => Number(a.year) - Number(b.year);
    } else if (sortBy === "yearDesc") {
      return (a, b) => Number(b.year) - Number(a.year);
    } else if (sortBy === "titleAsc") {
      return (a, b) => a.title.localeCompare(b.title);
    } else if (sortBy === "titleDesc") {
      return (a, b) => b.title.localeCompare(a.title);
    } else if (sortBy === "rateAsc") {
      return (a, b) => Number(a.rate) - Number(b.rate);
    } else {
      // sortBy is "rateDesc"
      return (a, b) => Number(b.rate) - Number(a.rate);
    }
  }

  const sortedMovies = [...movies].sort(getCompareFn());

  return (
    <div className="App">
      <header><button onClick={() => setSortBy("yearAsc")}>
        Sort by Year Ascending
      </button>
      <br />
      <button onClick={() => setSortBy("yearDesc")}>
        Sort by Year Descending
      </button>
      <br />
      <button onClick={() => setSortBy("titleAsc")}>
        Sort by Title Ascending
      </button>
      <br />
      <button onClick={() => setSortBy("titleDesc")}>
        Sort by Title Descending
      </button>
      <br />
      <button onClick={() => setSortBy("rateAsc")}>
        Sort by Rate Ascending
      </button>
      <br />
      <button onClick={() => setSortBy("rateDesc")}>
        Sort by Rate Descending
      </button>
      <br /></header>

      {sortedMovies.map((movie, index) => (
        /* {...movie} heißt: "Übergib jedes einzelne Feld von movie als prop an die Movie-Component." */
        <Moviecard key={index} {...movie} />
      ))}
    </div>
  );
}

export default App;
