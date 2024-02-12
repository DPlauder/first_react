import { MovieInput } from "../ts/interfaces/global_interfaces";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import movieShema from "./validationShema";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
} from "@mui/material";

interface Props {
  open: boolean;
  onSave: (movie: MovieInput) => void;
  onClose: (isClosed: boolean) => void;
  movie?: MovieInput;
}

export default function FormEdit({
  open,
  onSave,
  onClose,
  movie = { title: "", director: "", runtime: 0 },
}: Props): JSX.Element {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<MovieInput>({
    defaultValues: movie,
    resolver: yupResolver(movieShema),
  });

  useEffect(() => {
    if (movie.id) reset(movie);
  }, [movie, reset]);
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle id="form-dialog-title">
        {movie.id ? "Edit Movie" : "Add new Movies"}
      </DialogTitle>
      <form onSubmit={handleSubmit(onSave)}>
        <DialogContent>
          <div>
            <TextField
              {...register("title")}
              error={!!errors.title}
              label="Title"
              sx={{ mb: "10px" }}
            />
            {errors.title && <div>{errors.title.message}</div>}
          </div>
          <div>
            <TextField
              {...register("director")}
              error={!!errors.director}
              label="Director"
              sx={{ mb: "10px" }}
            />
            {errors.director && <div>{errors.director.message}</div>}
          </div>
          <div>
            <TextField
              {...register("runtime")}
              error={!!errors.runtime}
              label="Runtime"
            />
            {errors.runtime && <div>{errors.runtime.message}</div>}
          </div>
          <DialogActions>
            <Button color="primary" type="submit">
              Save
            </Button>
            <Button color="secondary" onClick={() => onClose(false)}>
              Cancel
            </Button>
          </DialogActions>
        </DialogContent>
      </form>
    </Dialog>
  );
}
