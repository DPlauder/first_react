import { useState, useEffect, useContext } from "react";
import { IMovie } from "../ts/interfaces/global_interfaces";
import MovieContext from "./MovieContext";

export default function useMovies() {
  const [movies, setMovies] = useContext(MovieContext);
  const [err, setErr] = useState<Error | null>(null);

  useEffect(() => {
    const options = {
      method: "GET",
      header: { "Content-Type": "application/json" },
    };
    (async () => {
      try {
        const data = await fetch("/movies", options);
        if (!data.ok) {
          throw new Error("Sorry, we couldn't connect to our server!");
        }
        setMovies((await data.json()) as IMovie[]);
      } catch (error) {
        setErr(error as Error);
      }
    })();
  }, [setMovies]);
  async function handleDelete(movie: IMovie) {
    const options = {
      method: "DELETE",
    };
    const res = await fetch(`/movies/${movie.id}`, options);
    if (res.ok) {
      setMovies((prevMovie) =>
        prevMovie.filter((prevMovie) => prevMovie.id !== movie.id)
      );
    }
  }
  async function handleAdd(movie: IMovie): Promise<void> {
    let method = "Post";
    let url = "/movies";
    if (movie.id) {
      method = "PUT";
      url += `/${movie.id}`;
    }

    const options = {
      method: "POST",
      body: JSON.stringify(movie),
      headers: { "Content-Type": "application/json" },
    };
    const res = await fetch(url, options);
    const data = await res.json();
    if (movie.id) {
      setMovies((prevMovies) =>
        prevMovies?.map((prevMovie) => {
          if (prevMovie.id === movie.id) {
            return data;
          }
          return prevMovie;
        })
      );
    } else {
      setMovies((prevMovie) => [...prevMovie, data]);
    }
  }

  return [movies, err, handleDelete, handleAdd];
}
