export interface Ingredient {
  name: string;
  price: number;
  image: string;
  style: CSS;
}

export interface IngredientListProps {
  ingredients: Ingredient[];
  onClickAdd: (ingredient: Ingredient) => void;
  onRemoveClick: (ingredient: Ingredient) => void;
}

interface FreqMap {
  [key: string]: number;
}

export interface BurgerProps {
  ingredients: Ingredient[];
}