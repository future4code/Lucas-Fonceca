import { RecipesDatabase } from "../data/RecipesDatabase";
import { recipe, RecipeInputDTO } from "../model/recipe";
import { generateId } from "../services/generateId";

export class RecipeBusiness {
  public create = async (input: RecipeInputDTO) => {
    try {
      const { title, description } = input;

      // if (!title || !description ) {
      //     throw new InvalidTitle
      // }
      const id: string = generateId();
      const creationDate: number = Date.now();
      const recipeDatabase = new RecipesDatabase();
      const recipe: recipe = {
        id,
        title,
        description,
        creationDate
      };
      await recipeDatabase.create(recipe);
    } catch (error: any) {
      throw new Error(error.message);
    }
  };


}
