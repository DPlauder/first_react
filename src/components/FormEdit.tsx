import { IMovie, MovieInput } from "../ts/interfaces/global_interfaces";
import useFormEdit from "./useFormEdit";

interface Props {
  onSave: (movie: MovieInput) => void;
  editMovie?: IMovie;
}

export default function FormEdit({ onSave, editMovie }: Props): JSX.Element {
  const { movie, handleSubmit, handleChange } = useFormEdit(
    onSave,
    editMovie as MovieInput
  );

  return (
    <form className="input-movie-form" onSubmit={handleSubmit}>
      <label htmlFor="title">
        Title:
        <input
          name="title"
          id="title"
          type="text"
          placeholder="Movie title"
          value={movie.title}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="director">
        Director:
        <input
          name="director"
          id="director"
          type="text"
          placeholder="Movie director"
          value={movie.director}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="runtime">
        Runtime:
        <input
          name="runtime"
          id="runtime"
          type="number"
          placeholder="Movie runtime"
          value={movie.runtime}
          onChange={handleChange}
        />
      </label>
    </form>
  );
}
