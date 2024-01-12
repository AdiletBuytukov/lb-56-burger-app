import React from 'react';
import {BurgerProps} from '../types';

export const Burger: React.FC<BurgerProps> = ({ ingredients}) => {
  return (
    <div className="Burger">
      <div className="BreadTop">
        <div className="Seeds1"></div>
        <div className="Seeds2"></div>
      </div>
      {ingredients.map((ingredient, index) => (
        <div className={ingredient.style} key={index}>
        </div>
      ))}
      <div className="BreadBottom"></div>
    </div>
  );
};
