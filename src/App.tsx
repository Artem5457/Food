import React, { useState } from 'react';
import {
  Routes,
  Route,
  Link,
} from 'react-router-dom';
import { ModalWindow } from './ModalWindow/ModalWindow';
import { Card } from './Card/Card';
import { Recipe, MyRecipe } from './types/recipe';
import { ListOfRecipes } from './ListOfRecipes/ListOfRecipes';
// eslint-disable-next-line import/extensions
import { ListOfMyRecipes } from './ListOfMyRecipes/ListOfMyRecipes';

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
    <>
      <header>
        <nav
          className="
            bg-gray-200
            h-auto
            flex
            sm:flex-col
            sm:items-center
            md:flex-row
            md:justify-center
          "
        >
          <Link
            to="/"
            className="
            flex
            justify-center
            bg-gray-100
            sm:w-52
            md:mx-3
            sm:my-4
            bg-white
            hover:bg-gray-200
            text-gray-800
            font-semibold
            py-2
            px-4
            border
            border-gray-400
            rounded
            shadow"
          >
            Random dish
          </Link>
          <Link
            to="/favourites"
            className="
            flex
            justify-center
            sm:w-52
            md:mx-3
            md:my-4
            bg-white
            hover:bg-gray-100
            text-gray-800
            font-semibold
            py-2
            px-4
            border
            border-gray-400
            rounded
            shadow"
          >
            Favourites
          </Link>
          <Link
            to="/my_favourites"
            className="
            flex
            justify-center
            sm:w-52
            sm:mt-4
            md:m-0
            md:mx-3
            bg-white
            hover:bg-gray-100
            text-gray-800
            font-semibold
            py-2
            px-4
            border
            border-gray-400
            rounded
            shadow"
          >
            My Recipes
          </Link>
          <button
            type="button"
            className="
            bg-gray-400
            sm:w-52
            md:mx-3
            sm:my-4
            bg-white
            hover:bg-gray-200
            text-gray-800
            font-semibold
            py-2
            px-4
            border
            border-gray-400
            rounded
            shadow"
            onClick={() => setAddDishStatus(!addDishStatus)}
          >
            Add custom dish
          </button>
        </nav>

        <Routes>
          <Route path="/" element={<Card addRecipe={addRecipe} recipes={ourRecipes} />} />
          <Route path="/favourites" element={<ListOfRecipes ourRecipes={ourRecipes} />} />
          <Route path="/my_favourites" element={<ListOfMyRecipes yourRecipes={yourRecipes} />} />
        </Routes>
      </header>

      <ModalWindow
        addDishStatus={addDishStatus}
        closeWindow={handleClose}
        addMyRecipe={addMyRecipe}
      />
    </>
  );
};

export default App;
