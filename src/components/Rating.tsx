import { StarBorder, Star } from "@mui/icons-material";

export type Movie = {
  id: number;
  title: string;
  director: string;
  runtime: number;
  rating: number;
};

interface Props {
  item: Movie;
  onRating: (id: number, rating: number) => void;
}

export default function Rating({ item, onRating }: Props) {
  const ratings: JSX.Element[] = [];
  for (let i = 0; i < 5; i++) {
    ratings.push(
      <div
        style={{ display: "inline-block" }}
        key={i}
        className="rating-btn"
        onMouseOver={() => onRating(item.id, i + 1)}
      >
        {item.rating > i ? <Star /> : <StarBorder />}
      </div>
    );
  }
  return ratings;
}
