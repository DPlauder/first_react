import style from "./css/MovieListItem.module.css";
import { IMovie } from "../ts/interfaces/global_interfaces";
import Rating from "./Rating";
import { Card, CardContent, IconButton, Grid, Typography } from "@mui/material";
import { Edit } from "@mui/icons-material";

import DeleteIcon from "@mui/icons-material/Delete";

interface Props {
  movie: IMovie;
  onDialog: (open: boolean, movie: IMovie) => void;
  onEdit: (open: boolean, movie: IMovie) => void;
}

export default function MovieListItem({ movie, onDialog, onEdit }: Props) {
  const classNames = [style.movieCard];
  if (movie.rating >= 5) classNames.push(style.fiveStar);
  return (
    <Grid item>
      <Card>
        <CardContent>
          <Typography component="h2" variant="h5">
            Title: {movie.title}
          </Typography>
          <Typography
            variant="subtitle1"
            component="h5"
            sx={{ mb: 1 }}
          ></Typography>
          <Typography variant="body1" component="span">
            Runtime: {movie.runtime}
          </Typography>
          <div>
            <Rating item={movie} />
          </div>
        </CardContent>
        <IconButton
          color="primary"
          aria-label="delete-movie"
          onClick={() => onDialog(true, movie)}
        >
          <DeleteIcon />
        </IconButton>
        <IconButton
          color="primary"
          aria-label="edit-movie"
          onClick={() => onEdit(true, movie)}
        >
          <Edit />
        </IconButton>
      </Card>
    </Grid>
  );
}
