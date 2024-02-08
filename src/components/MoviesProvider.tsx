import React, { useState } from "react";
import MovieContext from "./MovieContext";
import { IMovie } from "../ts/interfaces/global_interfaces";

interface Props {
  children: React.ReactNode;
}

export default function MoviesProvider({ children }: Props) {
  const [movies, setMovies] = useState<IMovie[]>([]);
  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {children}
    </MovieContext.Provider>
  );
}
