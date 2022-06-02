import { post } from "../model/post";
import { BaseDatabase } from "./BaseDataBase";

export class PostDatabase extends BaseDatabase {
  private static TABLE_NAME = "labook_posts";

  async create(post: post): Promise<void> {
    await BaseDatabase.connection(PostDatabase.TABLE_NAME).insert(
      this.toModelPost(post)
    );
  }
  private toModelPost = (post: post): any => {
    return {
      id: post.id,
      photo: post.photo,
      description: post.description,
      type: post.type,
      createdAt: post.createdAt,
      authorId: post.authorId,
    };
  };
}
