import meatImage from '../assets/meat.png';
import cheeseImage from '../assets/cheese.png';
import saladImage from '../assets/salad.png';
import baconImage from '../assets/bacon.png';
import {Ingredient} from '../types';

const INGREDIENTS: Ingredient[] = [
  {name: 'meat', price: 80, image: meatImage},
  {name: 'cheese', price: 50, image: cheeseImage},
  {name: 'salad', price: 10, image: saladImage},
  {name: 'bacon', price: 60, image: baconImage},
];

export default INGREDIENTS;