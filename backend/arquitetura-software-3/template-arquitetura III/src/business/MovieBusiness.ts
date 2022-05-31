import { MovieDatabase } from "../data/MovieDatabase";
import {
  InvalidDescritption,
  InvalidDuration,
  InvalidTitle,
  InvalidYear,
} from "../error/customError";
import { Movie, MovieInputDTO } from "../model/movie";
import { generateId } from "../services/generateId";

export class MovieBusiness {
  public create = async (input: MovieInputDTO) => {
    try {
      const { title, description, duration_in_minutes, year_of_release } =
        input;

      if (!title || title.length < 2) {
        throw new InvalidTitle();
      }
      if (!description || description.length < 3) {
        throw new InvalidDescritption();
      }
      if (!duration_in_minutes) {
        throw new InvalidDuration();
      }
      if (!year_of_release) {
        throw new InvalidYear();
      }

      const id: string = generateId();

      const movieDatabase = new MovieDatabase();
      const movie: Movie = {
        description,
        duration_in_minutes,
        id,
        title,
        year_of_release,
      };
      await movieDatabase.create(movie);
    } catch (error: any) {
      throw new Error(error.message);
    }
  };
}
