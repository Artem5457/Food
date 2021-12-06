import React, { useState, useContext } from 'react';
import {
  Dialog, DialogContent, DialogContentText, DialogTitle,
} from '@mui/material';
import StatusContext from '../context';
import { MyRecipe } from '../types/recipe';

type Props = {
  closeWindow: () => void;
  addMyRecipe: (myRec: MyRecipe) => void;
};

export const ModalWindow: React.FC<Props> = ({ closeWindow, addMyRecipe }) => {
  const { addDishStatus } = useContext(StatusContext);
  const [title, setTitle] = useState('');
  const [instruction, setInstruction] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    addMyRecipe(
      {
        id: +new Date(),
        strArea: title,
        strInstructions: instruction,
      },
    );

    setTitle('');
    setInstruction('');
  };

  return (
    <div>
      <Dialog open={addDishStatus} onClose={closeWindow}>
        <DialogTitle>Add custom dish</DialogTitle>
        <DialogContent>
          <DialogContentText align="justify">
            To add your recipe to this application,
            please enter dish title and  recipe instruction.
          </DialogContentText>
          <form
            className="
              flex
              flex-col
            "
            onSubmit={handleSubmit}
          >
            <input
              className="
                py-1.5
                px-3
                my-3
                bg-gray-200
                outline-none
                rounded
              "
              type="text"
              name="dish-title"
              placeholder="Dish title"
              required
              value={title}
              onChange={event => {
                setTitle(event.currentTarget.value);
              }}
            />
            <textarea
              className="
                resize-none
                py-1.5
                px-3
                bg-gray-200
                outline-none
                rounded
              "
              name="recipe"
              rows={10}
              placeholder="Dish description..."
              required
              value={instruction}
              onChange={event => {
                setInstruction(event.currentTarget.value);
              }}
            />
            <div
              className="
                flex
                justify-center
                pt-8
              "
            >
              <button
                type="submit"
                className="
                  bg-blue-500
                  hover:bg-blue-700
                  text-white
                  font-bold
                  py-2
                  px-4
                  rounded-full"
              >
                Add custom dish
              </button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};
