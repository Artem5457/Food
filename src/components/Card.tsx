import { useState, useEffect, useContext } from 'react';
import { getRecipe } from '../api/recipe';
import { Recipe } from '../types/recipe';
import { Loader } from '../Loader';
import StatusContext from '../context';

export const Card = () => {
  const { addRecipe, ourRecipes } = useContext(StatusContext);
  const [recipe, setRecipe] = useState<Recipe>(
    {
      idMeal: '0',
      strArea: '',
      strCategory: '',
      strInstructions: '',
      strMealThumb: '',
      strYoutube: '',
      strSource: '',
    },
  );
  const [loadingStatus, setLoadingStatus] = useState<boolean>(true);

  useEffect(() => {
    getRecipe()
      .then(gotRecipe => {
        setRecipe(gotRecipe.meals[0]);
        setLoadingStatus(false);
      });
  }, []);

  if (loadingStatus) {
    return (<Loader />);
  }

  return (
    <main
      className="
        flex
        flex-col
        items-center
        sm:py-24
        xl:py-24
        md:py-44
      "
      style={{ height: 'max-content' }}
    >
      <div
        className="
        shadow-md
        rounded-md
        overflow-hidden
        bg-white"
        style={{ width: '310px' }}
      >
        <img
          src={(recipe.strMealThumb === null)
            ? '/img/Placeholder.png'
            : recipe.strMealThumb}
          className="
          rounded-lg
          shadow-xl
          mb-4
        "
          alt=""
        />

        <div className="text-center">
          <h5 className="
          text-xl
          font-semibold
          mb-2"
          >
            {recipe.strArea}
            {' '}
            {recipe.strCategory}
          </h5>

          <div
            className="
            mb-4
            h-36
            overflow-hidden
            overflow-ellipsis"
          >
            {recipe.strInstructions}
          </div>

          <div className="h10">
            <button
              className="
              bg-purple-500
              text-white
              font-bold
              uppercase
              text-xs
              px-4
              py-2
              rounded
              shadow
              hover:shadow-md
              bg-green-500
              active:bg-green-700
              hover:bg-red-700
              outline-none
              focus:outline-none
              mr-1
              mb-1
              ease-linear
              transition-all
              duration-150
            "
              type="button"
              onClick={() => {
                getRecipe()
                  .then(newRecipe => setRecipe(newRecipe.meals[0]));
              }}
            >
              Skip
            </button>
            <button
              className="
              bg-purple-500
              text-white
              font-bold
              uppercase
              text-xs
              px-4
              py-2
              rounded
              shadow
              hover:shadow-md
              hover:bg-red-700
              hover:scale-50
              outline-none
              focus:outline-none
              mr-1
              mb-1
              ease-linear
              transition-all
              duration-150
            "
              type="button"
              onClick={() => {
                addRecipe(recipe);
              }}
            >
              Like
            </button>
          </div>
        </div>
      </div>
      <div className="pt-6 text-2xl">
        Counter of favourite recipes from catalog:
        {' '}
        {ourRecipes.length}
      </div>
    </main>
  );
};
