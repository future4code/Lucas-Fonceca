import { Request, Response } from "express";
import { MovieBusiness } from "../business/MovieBusiness";
import { MovieInputDTO } from "../model/movie";

export class MovieController {
  public create = async (req: Request, res: Response) => {
    try {
      const { title, description, durationInMinutes, yearOfRelease } =
        req.body;

      const input: MovieInputDTO = {
        title,
        description,
        durationInMinutes,
        yearOfRelease,
      };

      const movieBusiness = new MovieBusiness();
      await movieBusiness.create(input);
      res.status(201).send({ message: "Filme cadastrado com sucesso" });
      
    } catch (error) {
      res.status(400).send(error.message);
    }
  };
}
