export type recipe = {
  id: string;
  title: string;
  description: string;
  creationDate: number;
};

export interface RecipeInputDTO {
  title: string;
  description: string;
  creationDate: number;
}
