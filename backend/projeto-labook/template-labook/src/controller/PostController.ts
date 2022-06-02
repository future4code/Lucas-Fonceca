import { Request, Response } from "express";
import { PostBusiness } from "../business/PostBusiness";
import { PostInputDTO } from "../model/post";

export class PostController {
  public createPost = async (req: Request, res: Response) => {
    try {
      let message = "Success!";

      const { photo, description, type, authorId } = req.body;

      const input: PostInputDTO = {
        photo,
        description,
        type,
        authorId,
      };

      const postBusiness = new PostBusiness();
      await postBusiness.create(input);
      res.status(201).send(message);
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  };
}
