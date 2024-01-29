import "./MovieList.css";
const movies = [
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
  return (
    <div className="container">
      {movies.map((movie) => {
        return (
          <div className="movie-card" key={movie.id}>
            <h2>Title: {movie.title}</h2>
            <h5>Director: {movie.director}</h5>
            <span>Runtime: {movie.runtime}</span>
            <div>{movie.rating && "*".repeat(movie.rating)}</div>
          </div>
        );
      })}
    </div>
  );
}
