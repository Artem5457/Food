import React, { useState } from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';
import { ModalWindow } from './components/ModalWindow';
import { Card } from './components/Card';
import { Recipe, MyRecipe } from './types/recipe';
import { ListOfRecipes } from './components/ListOfRecipes';
import { ListOfMyRecipes } from './components/ListOfMyRecipes';
import StatusContext from './context';
import { Header } from './components/Header';

const App: React.FC = () => {
  // I get an array of recipes from localStorage here
  const gotRecipes = localStorage.getItem('favourites');
  const readRecipesStorage = () => {
    if (gotRecipes === null) {
      return [];
    }

    return JSON.parse(gotRecipes);
  };

  const ourRecipes = readRecipesStorage();

  // I get an array of my recipes from localStorage here
  const gotMyRecipes = localStorage.getItem('myFavourites');
  const readMyRecipesStorage = () => {
    if (gotMyRecipes === null) {
      return [];
    }

    return JSON.parse(gotMyRecipes);
  };

  const yourRecipes = readMyRecipesStorage();

  // Hooks
  const [addDishStatus, setAddDishStatus] = useState(false);
  const [recipes, setRecipes] = useState<Recipe[]>(ourRecipes);
  const [myRecipes, setMyRecipes] = useState<MyRecipe[]>(yourRecipes);

  // Other functions
  const handleClose = () => setAddDishStatus(false);
  const addRecipe = (recipe: Recipe) => {
    if (recipes.find(el => +el.idMeal === +recipe.idMeal)) {
      return;
    }

    setRecipes([...recipes, recipe]);
    localStorage.setItem('favourites', JSON.stringify([...recipes, recipe]));
  };

  const addMyRecipe = (myRec: MyRecipe) => {
    setMyRecipes([...myRecipes, myRec]);
    localStorage.setItem('myFavourites', JSON.stringify([...myRecipes, myRec]));
  };

  return (
    <StatusContext.Provider
      value={{
        addDishStatus,
        setAddDishStatus,
        ourRecipes,
      }}
    >
      <Header />

      <Routes>
        <Route path="/" element={<Card addRecipe={addRecipe} ourRecipes={ourRecipes} />} />
        <Route path="/favourites" element={<ListOfRecipes ourRecipes={ourRecipes} />} />
        <Route path="/my_favourites" element={<ListOfMyRecipes yourRecipes={yourRecipes} />} />
      </Routes>

      <ModalWindow
        closeWindow={handleClose}
        addMyRecipe={addMyRecipe}
      />

    </StatusContext.Provider>
  );
};

export default App;
