export type Movie = {
  id: string;
  title: string;
  description: string;
  duration_in_minutes: number;
  year_of_release: number;
};

export interface MovieInputDTO {
  title: string;
  description: string;
  duration_in_minutes: number;
  year_of_release: number;
}

// const toModelMovie = (movie: Movie): any => {
//   return {
//     id: movie.id,
//     title: movie.title,
//     description: movie.description,
//     durationInMinutes: movie.duration_in_minutes,
//     yearOfRelease: movie.year_of_release,
//   };
// };
