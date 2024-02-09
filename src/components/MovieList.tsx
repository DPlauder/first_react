import MovieListItem from "./MovieListItem";
import useMovies from "./useMovies";
import { Container, Grid, TextField } from "@mui/material";

import { IMovie } from "../ts/interfaces/global_interfaces";
import { useState } from "react";

export default function MovieList() {
  const [movies, err] = useMovies();
  const [filter, setFilter] = useState("");
  {
    if (err !== null) {
      return <Container>{(err as Error).message}</Container>;
    } else {
      return (
        <Container sx={{ backgroundColor: "#EBEBEB", p: 10 }}>
          <TextField
            id="filter-input"
            label="Liste Filtern"
            variant="outlined"
            sx={{ mb: 3 }}
            value={filter}
            onChange={(e) => {
              setFilter(e.target.value);
            }}
          ></TextField>
          <Grid container spacing={2}>
            {" "}
            {(movies as IMovie[])
              .filter((movie: IMovie) => {
                return movie.title.toLowerCase().includes(filter.toLowerCase());
              })
              .map((movie: IMovie): JSX.Element => {
                return <MovieListItem key={movie.id} movie={movie} />;
              })}
          </Grid>
        </Container>
      );
    }
  }
}
