import React from "react";
import "./movie-list.css";
import MovieListItem from "../movie-list-item/movie-list-item";

const User = ({ FirstName, LastName, link }) => {
  return <div></div>;
};

const MovieList = ({ movies, onDelete }) => {
  return (
    <ul className="movie-list">
      {movies.map((item, index) => (
        <MovieListItem
          key={item.id}
          name={item.name}
          viewers={item.viewers}
          director={item.director}
          favourite={item.favourite}
          like={item.like}
          onDelete={() => onDelete(item.id)}
        />
      ))}
    </ul>
  );
};

export default MovieList;
