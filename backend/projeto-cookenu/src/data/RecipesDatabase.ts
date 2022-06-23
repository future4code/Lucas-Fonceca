import { authenticationData } from "../model/authenticationId";
import { recipe } from "../model/recipe";
import { BaseDatabase } from "./BaseDatabase";

export class RecipesDatabase extends BaseDatabase {
  private static TABLE_NAME = "recipes_cookenu";

  async create(recipe: recipe): Promise<void> {
    await BaseDatabase.connection(RecipesDatabase.TABLE_NAME).insert(
      this.toModelRecipe(recipe)
    );
  }
  private toModelRecipe = (recipe: recipe): any => {
    return {
      id: recipe.id,
      title: recipe.title,
      description: recipe.description,
      creation_date: recipe.creationDate,
    };
  };

  async queryRecipe(authId: authenticationData): Promise<void> {
    await BaseDatabase.connection(RecipesDatabase.TABLE_NAME)
      .select("*")
      .where("id", authId);
  }
}
