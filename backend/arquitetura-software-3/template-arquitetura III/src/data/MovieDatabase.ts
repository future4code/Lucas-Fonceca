import { movie } from "../model/movie";
import { BaseDatabase } from "./BaseDatabase";

export class MovieDatabase extends BaseDatabase {
  private static TABLE_NAME = "LABEFLIX_MOVIE";

  async create(movie: movie): Promise<void> {
    await BaseDatabase.connection(MovieDatabase.TABLE_NAME)
      // .insert({
      //   // id: movie.id,
      //   // title: movie.title,
      //   // description: movie.description,
      //   // duration_in_minutes: movie.durationInMinutes,
      //   // year_of_release: movie.yearOfRelease,
      // });
      .insert(this.toModelMovie(movie));
  }
  private toModelMovie = (movie: movie): any => {
    return {
      id: movie.id,
      title: movie.title,
      description: movie.description,
      duration_in_minutes: movie.durationInMinutes,
      year_of_release: movie.yearOfRelease,
    };
  };
}
