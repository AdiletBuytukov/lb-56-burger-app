import React from 'react';
import {IngredientListProps} from '../types';

const IngredientList: React.FC<IngredientListProps> = ({ingredients, onClickAdd, onRemoveClick}) => {
  return (
    <div>
      {ingredients.map((ingredient) => (
        <div className="ing-main" key={ingredient.name}>
          <img className="ing-image" src={ingredient.image} alt={ingredient.name}/>
          <span className="ing-name">{ingredient.name}</span>
            <button className="ing-btn-add" onClick={() => onClickAdd(ingredient)}>Добавить</button>
            <button className="ing-btn-remove" onClick={() => onRemoveClick(ingredient)}>Удалить</button>
        </div>
      ))}
    </div>
  );
}

export default IngredientList;
