import React, { useState } from "react";
import moviesData from "./data";
import Navbar from "./components/navbar/navbar";
import Carousel from "./components/carousel/carousel";
import LatestReleases from "./components/release/LatestReleases";
import "./App.css";

function App() {
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleSelectMovie = (movie) => {
    setSelectedMovie(movie);
  };

  return (
    <div className="App">
      <Navbar selectedMovie={selectedMovie} />
      <Carousel movies={moviesData} />
      <LatestReleases movies={moviesData} onSelectMovie={handleSelectMovie} />;
    </div>
  );
}

export default App;
