import React from "react";
import "./navbar.css";

function Navbar({ selectedMovie }) {
  return (
    <nav>
      <div className="nav-wrapper">
        <div className="nav-links">
          <a href="/anonime" className="nav-title">
            Anonime
          </a>
          <a href="/home">Home</a>
          <a href="/list-anime">List Anime</a>
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Search anime or movie" />
        </div>
      </div>
      <h1>Explore</h1>
      <div className="explore-content">
        {selectedMovie && (
          <div className="movie-details-layout">
            <div className="movie-image">
              <img src={selectedMovie.image} alt={selectedMovie.movieName} />
            </div>
            <div className="movie-info">
              <h2 style={{ color: "white", textAlign: "center" }}>
                {selectedMovie.movieName}
              </h2>
              <p>Episode : {selectedMovie.episode}</p>
              <p>Nội Dung : {selectedMovie.description}</p>
            </div>
          </div>
        )}
      </div>
      <p>What are you gonna watch today ? </p>
    </nav>
  );
}

export default Navbar;
