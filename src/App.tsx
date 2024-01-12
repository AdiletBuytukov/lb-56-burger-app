import './App.css'
import INGREDIENTS from './Components/ingredints';


const App = () => {
  const initialIngredient: Record<string, number> = INGREDIENTS.reduce((acc, ing) => {
    acc[ing.name] = 0;
    return acc;
  }, {});
}

export default App;
