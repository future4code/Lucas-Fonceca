export type movie = {
  id: string;
  title: string;
  description: string;
  durationInMinutes: number;
  yearOfRelease: number;
};

export interface MovieInputDTO {
  title: string;
  description: string;
  durationInMinutes: number;
  yearOfRelease: number;
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
