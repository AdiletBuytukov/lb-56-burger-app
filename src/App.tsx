import './App.css';
import INGREDIENTS from './Components/ingredints';
import {FreqMap, Ingredient} from './types';
import React, {useState} from 'react';
import IngredientList from './Components/ingredientList';
import { Burger } from './Components/displayBurger'

const initialIngredient: FreqMap = INGREDIENTS.reduce((acc, ing) => {
  acc[ing.name] = 0;
  return acc;
}, {} as FreqMap);

const defaultPrice = 30;

const App: React.FC = () => {
  const [ingCount, setIngCount] = useState(initialIngredient);

  const addIng = (ingredient: Ingredient) => {
    setIngCount((prevState) => ({
      ...prevState,
      [ingredient.name]: prevState[ingredient.name] + 1,
    }));
  };

  const removeIng = (ingredient: Ingredient) => {
    setIngCount((prevState) => ({
      ...prevState,
      [ingredient.name]: Math.max(prevState[ingredient.name] - 1, 0),
    }));
  };

  const calcPrice = (): number => {
    return INGREDIENTS.reduce((calcPrice, ingredient) => {
      return calcPrice + ingredient.price * ingCount[ingredient.name];
    }, 0);
  };
  return (
    <div>
      <p>Ингридиенты</p>
      <div>
        <IngredientList
          ingredients={INGREDIENTS}
          onClickAdd={(ingredient) => addIng(ingredient)}
          onRemoveClick={(ingredient) => removeIng(ingredient)}
        />
      </div>
      <Burger
        ingredients={INGREDIENTS.filter((ingredient) => ingCount[ingredient.name] > 0)}
      />
      <p>Стоимость бургера: {defaultPrice + calcPrice()} сом</p>
    </div>
  );
};

export default App;
