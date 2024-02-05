import { useState, useEffect } from "react";
import { IMovie } from "../ts/interfaces/global_interfaces";
import MovieList from "./MovieList.container";

export default function MovieListContainer() {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [err, setErr] = useState<Error | null>(null);

  useEffect(() => {
    const connect = async () => {
      try {
        const data = await fetch("/movies", options);
        if (!data.ok) {
          throw new Error("Sorry, we couldn't connect to our server!");
        }
        setMovies((await data.json()) as IMovie[]);
      } catch (error) {
        setErr(error as Error);
      }
    };
    connect();
  }, []);
  const options = {
    method: "GET",
    header: { "Content-Type": "application/json" },
  };

  const handleRating = (id: number, rating: number): void => {
    setMovies((prevMovie) => {
      return prevMovie.filter((movie) => {
        if (movie.id === id) movie.rating = rating;
        return movies;
      });
    });
  };
  return <MovieList movies={movies} err={err} handleRating={handleRating} />;
}
