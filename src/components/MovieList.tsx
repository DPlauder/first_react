import MovieListItem from "./MovieListItem";
import useMovies from "./useMovies";
import { Container, Grid, TextField, Fab } from "@mui/material";
import Add from "@mui/icons-material/Add";
import { IMovie } from "../ts/interfaces/global_interfaces";
import { useState } from "react";
import DeleteDialog from "./DeleteDialog";
import FormEdit from "./FormEdit";
import { MovieInput } from "../ts/interfaces/global_interfaces";

export default function MovieList() {
  const [movies, err, handleDelete, handleAdd] = useMovies();
  const [filter, setFilter] = useState("");
  const [deleteDialog, setDeleteDialog] = useState<{
    open: boolean;
    movie: IMovie | null;
  }>({ open: false, movie: null });
  const [formDialog, setFormDialog] = useState<{
    open: boolean;
    movie?: IMovie;
    isNew?: boolean;
  }>({ open: false, isNew: true });

  const handleDialog = (open: boolean, movie: IMovie) => {
    if (open) {
      setDeleteDialog({ open: true, movie });
    } else {
      setDeleteDialog({ open: false, movie: null });
    }
  };

  const handleEditDialog = (open: boolean, movie: IMovie) => {
    if (open) {
      setFormDialog({ open: true, movie });
    } else {
      setFormDialog({ open: false, movie: undefined });
    }
  };
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
                return (
                  <MovieListItem
                    key={movie.title}
                    movie={movie}
                    onDialog={handleDialog}
                    onEdit={handleEditDialog}
                  />
                );
              })}
          </Grid>
          <DeleteDialog
            title="Delete Element"
            text={`Do you really want to delete the movie "${deleteDialog.movie?.title}"`}
            open={deleteDialog.open}
            onConfirm={(isComfirmed) => {
              if (isComfirmed && deleteDialog.movie) {
                (handleDelete as (movie: IMovie) => Promise<void>)(
                  deleteDialog.movie
                );
              }
              setDeleteDialog({ open: false, movie: null });
            }}
          ></DeleteDialog>
          <FormEdit
            onSave={(movie: MovieInput) => {
              setFormDialog({ open: false, movie: undefined, isNew: false });
              (
                handleAdd as (
                  movie: MovieInput,
                  isNew: boolean
                ) => Promise<void>
              )(movie, formDialog.isNew!);
            }}
            open={formDialog.open}
            onClose={() => setFormDialog({ open: false, movie: undefined })}
            movie={formDialog.movie}
          />
          <Fab
            color="primary"
            onClick={() => {
              setFormDialog({ open: true, movie: undefined, isNew: true });
            }}
            sx={{
              position: "fixed",
              right: "50%",
              bottom: "10%",
              transform: "translateX(-50%)",
            }}
          >
            <Add />
          </Fab>
        </Container>
      );
    }
  }
}
