import React from 'react';
import {IngredientListProps} from '../types';

const IngredientList: React.FC<IngredientListProps> = ({ingredient, onClickAdd}) => {
  return (
    <div>
      <p>Ингридиенты</p>
      {ingredient.map((ingredient) => (
          <div key={ingredient.name}>
            <img className="ing-image" src={ingredient.image} />
            <span>{ingredient.name}</span>
            <button onClick={() => onClickAdd(ingredient)}>Добавить</button>
          </div>
        )
      )}
    </div>
  )
}

export default IngredientList;