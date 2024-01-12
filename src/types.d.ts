export interface Ingredient {
  name: string;
  price: number;
  image: string;
}

export interface IngredientListProps {
  ingredient: Ingredient[];
  onClickAdd: (ingredient: Ingredient) => void;
}