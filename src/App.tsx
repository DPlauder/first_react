import "./App.css";
/* import FormEdit from "./components/FormEdit";
import { MovieInput } from "./ts/interfaces/global_interfaces";
import React from "react"; */
import MoviesProvider from "./components/MoviesProvider";
import MovieList from "./components/MovieList";
import { Typography } from "@mui/material";

function App() {
  return (
    <>
      <Typography
        variant="h3"
        component="h1"
        sx={{ textAlign: "center", mt: 3, mb: 3 }}
      >
        Movie List
      </Typography>
      <MoviesProvider>
        <MovieList />
      </MoviesProvider>

      {/* 
      <FormEdit
        onSave={(
          movie: MovieInput,
          event: React.FormEvent<HTMLFormElement>
        ) => {
          console.log(movie, event);
        }}
        editMovie={{
          id: 9,
          title: "best Fildm",
          director: " best Director",
          runtime: 300,
          rating: 5,
        }}
      ></FormEdit> */}
    </>
  );
}

export default App;
