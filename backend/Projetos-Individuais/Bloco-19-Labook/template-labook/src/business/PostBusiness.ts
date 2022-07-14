import { PostDatabase } from "../data/PostDatabase";
import { authenticationData } from "../model/authenticationId";
import { post, PostInputDTO, PostOutputDTO } from "../model/post";
import { generateId } from "../services/generateId";

export class PostBusiness {
  public create = async (input: PostInputDTO) => {
    try {
      const { photo, description, type, authorId } = input;
      if (!photo || !description || !type || !authorId) {
        throw new Error("");
      }

      const id: string = generateId();
      const createdAt: Date = new Date();

      const postDatabase = new PostDatabase();
      const post: post = {
        id,
        photo,
        description,
        authorId,
        type,
        createdAt,
      };

      await postDatabase.create(post);
    } catch (error: any) {
      throw new Error(error.message);
    }
  };

  public queryPost = async (authId: authenticationData) => {
    try {
      const postDatabase = new PostDatabase();
      await postDatabase.queryPost(authId);
    } catch (error: any) {
      throw new Error(error.message);
    }
  };
}
