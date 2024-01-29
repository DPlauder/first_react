import "./MovieList.css";
import MovieListItem from "./MovieListItem";
import { useState } from "react";

const initMovies = [
  {
    id: 1,
    title: "Killers if the Flower Moon",
    director: "Marting Scorcese",
    runtime: 3.26,
    rating: 5,
  },
  {
    id: 2,
    title: "Asteroide City",
    director: "Wes Anderson",
    runtime: 1.45,
    rating: 4,
  },
  {
    id: 3,
    title: "The Wale",
    director: "Darren Aronofsjy",
    runtime: 1.57,
    rating: 5,
  },
];

export default function MovieList() {
  const [movies, setMovies] = useState(initMovies);
  const handleRating = (id: number, rating: number): void => {
    setMovies((prevMovie) => {
      return prevMovie.filter((movie) => {
        if (movie.id === id) movie.rating = rating;
        return movies;
      });
    });
  };
  return (
    <div className="container">
      {movies.map((movie): JSX.Element => {
        return (
          <MovieListItem
            key={movie.id}
            movie={movie}
            onRating={handleRating}
          ></MovieListItem>
        );
      })}
    </div>
  );
}
