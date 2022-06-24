export type recipe = {
  id: string;
  title: string;
  description: string;
  creationDate: string;
};

export interface RecipeInputDTO {
  title: string;
  description: string;
  creationDate: string;
}
