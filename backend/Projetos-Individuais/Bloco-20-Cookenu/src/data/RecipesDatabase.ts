import { CustomError } from "../error/customError";
import { authenticationData } from "../model/authenticationId";
import { recipe } from "../model/recipe";
import { BaseDatabase } from "./BaseDatabase";

export class RecipesDatabase extends BaseDatabase {
  private static TABLE_NAME = "recipes_cookenu";

  public create = async (recipe: recipe): Promise<void> => {
    await BaseDatabase.connection(RecipesDatabase.TABLE_NAME).insert(
      this.toModelRecipe(recipe)
    );
  };
  private toModelRecipe = (recipe: recipe): any => {
    return {
      id: recipe.id,
      title: recipe.title,
      description: recipe.description,
      creation_date: recipe.creationDate,
    };
  };
  public findRecipe = async (id: string) => {
    try {
      const result = await RecipesDatabase.connection("recipes_cookenu")
        .select("*")
        .where({ id });
      return result;
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };
}
