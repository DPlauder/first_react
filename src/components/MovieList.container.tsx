import "./MovieList.css";
import MovieListItem from "./MovieListItem";

import { IMovie } from "../ts/interfaces/global_interfaces";

interface Props {
  movies: IMovie[];
  err: Error | null;
  handleRating: (id: number, rating: number) => void;
}

export default function MovieList({ movies, err, handleRating }: Props) {
  {
    if (err !== null) {
      return <div>{err?.message}</div>;
    } else {
      return (
        <div className="container">
          {"."}
          {movies.map((movie): JSX.Element => {
            return (
              <MovieListItem
                key={movie.id}
                movie={movie}
                onRating={handleRating}
              />
            );
          })}
        </div>
      );
    }
  }
}
