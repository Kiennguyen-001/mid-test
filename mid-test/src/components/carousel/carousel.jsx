import React from "react";
import "./carousel.css";

function Carousel({ movies }) {
  return (
    <div className="carousel">
      {movies.slice(0, 1).map((movie) => (
        <div key={movie.id} className="carousel-item">
          <img
            src={movie.image}
            alt={movie.movieName}
            style={{ width: "100%", height: "400px" }}
          />
          <div className="header">
            <h2>{movie.movieName}</h2>
            <p>{movie.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Carousel;
