import React from "react";

const Movie = ({ movie }) => {
  console.log(movie.movieReleaseDate);
  return (
    <div>
      <div
        className="card w-96 glass"
        data-aos="flip-left"
        data-aos-offset="500"
        data-aos-easing="ease-in-sine"
      >
        <figure>
          <img src={movie.image} alt="car!" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Movie name: {movie.movieName}</h2>
          <p>Release Date: {movie.movieReleaseDate}</p>
          <p>Imdb rating: {movie.imdbRating}</p>
          

        
        </div>
      </div>
    </div>
  );
};

export default Movie;
