import { useContext } from 'react';
import { MyRecipe } from '../types/recipe';
import { MyRecipeCard } from './MyRecipeCard';
import StatusContext from '../context';

export const ListOfMyRecipes = () => {
  const { yourRecipes } = useContext(StatusContext);

  return (
    <>
      <h1
        className="
          text-center
          pt-10
          text-3xl"
      >
        My recipes:
      </h1>
      <ul className="
        list-none
        flex
        flex-wrap
        justify-center
        my-16
        gap-9"
      >
        {yourRecipes.map((recipe: MyRecipe) => (
          <li
            key={recipe.id}
          >
            <MyRecipeCard
              yourRecipe={recipe}
            />
          </li>
        ))}
      </ul>
    </>
  );
};
