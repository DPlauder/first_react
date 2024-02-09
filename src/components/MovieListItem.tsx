import style from "./css/MovieListItem.module.css";
import { IMovie } from "../ts/interfaces/global_interfaces";
import Rating from "./Rating";
import { Card, CardContent, Grid, Typography } from "@mui/material";

interface Props {
  movie: IMovie;
}

export default function MovieListItem({ movie }: Props) {
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
      </Card>
    </Grid>
  );
}
