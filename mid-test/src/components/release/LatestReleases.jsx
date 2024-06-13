import React from "react";
import "./LatestReleases.css";

function LatestReleases({ movies, onSelectMovie }) {
  return (
    <>
      <h1>New Release</h1>
      <div className="latest-releases">
        {movies.slice(1).map((movie) => (
          <div
            key={movie.id}
            className="movie-item"
            onClick={() => onSelectMovie(movie)}
          >
            <div className="movie-image-wrapper">
              <img src={movie.image} alt={movie.movieName} />
              <span className="episode-number">Episode: {movie.episode}</span>
            </div>
            <h3>{movie.movieName}</h3>
          </div>
        ))}
      </div>
    </>
  );
}

export default LatestReleases;
