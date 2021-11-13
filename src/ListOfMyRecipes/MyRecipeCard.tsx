import React from 'react';
import { MyRecipe } from '../types/recipe';

type Props = {
  yourRecipe: MyRecipe;
};

export const MyRecipeCard: React.FC<Props> = ({ yourRecipe }) => {
  return (
    <>
      <div
        className="
        shadow-md
        rounded-md
        overflow-hidden
        bg-white"
        style={{ width: '320px' }}
      >
        <img
          src="https://i.ibb.co/FVkTVkF/Placeholder.png"
          className="
          rounded-lg
          shadow-xl
          mb-4
        "
          alt="Placeholder"
        />

        <div className="text-center">
          <h5 className="
          text-xl
          font-semibold
          mb-2"
          >
            {yourRecipe.strArea}
          </h5>

          <div
            className="
            mb-4
            h-36
            overflow-hidden
            overflow-ellipsis"
          >
            {yourRecipe.strInstructions}
          </div>

        </div>
      </div>
    </>
  );
};
