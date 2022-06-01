import { MovieDatabase } from "../data/MovieDatabase";
import {
  InvalidDescritption,
  InvalidDuration,
  InvalidTitle,
  InvalidYear,
} from "../error/customError";
import { movie, MovieInputDTO } from "../model/movie";
import { generateId } from "../services/generateId";

export class MovieBusiness {
  public create = async (input: MovieInputDTO) => {
    try {
      const { title, description, durationInMinutes, yearOfRelease } =
        input;

      if (!title || title.length < 2) {
        throw new InvalidTitle();
      }
      if (!description || description.length < 3) {
        throw new InvalidDescritption();
      }
      if (!durationInMinutes) {
        throw new InvalidDuration();
      }
      if (!yearOfRelease) {
        throw new InvalidYear();
      }

      const id: string = generateId();

      const movieDatabase = new MovieDatabase();
      const movie: movie = {
        description,
        durationInMinutes,
        id,
        title,
        yearOfRelease,
      };
      await movieDatabase.create(movie);
    } catch (error: any) {
      throw new Error(error.message);
    }
  };
}
