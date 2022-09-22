import React, { useEffect, useState } from "react";
import Movie from "../Movie/Movie";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [filter, setFilter] = useState('');
  useEffect(() => {
    fetch("http://localhost:7000/api/v1/share")
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.data.data);
      });
  }, []);
  return (
    <>
    <div className="">
    <input type="text" id="filter"
          name="filter" placeholder="Search by movie name" className="relative right-0  input input-bordered w-full max-w-xs" value={filter}
          onChange={event => setFilter(event.target.value)}/>
    </div>
  
    <div className="grid lg:grid-cols-3 md:grid-cols-1 gap-3 mt-20">
        
      {movies.filter(f => f.movieName.toLowerCase().includes(filter.toLowerCase()) || filter === '').map((movie) => (
        <Movie movie={movie}></Movie>
      ))}
    </div>
    </>
  );
};

export default Movies;
