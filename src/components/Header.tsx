import { useContext } from 'react';
import { Link } from 'react-router-dom';
import StatusContext from '../context';

export const Header = () => {
  const { addDishStatus, setAddDishStatus } = useContext(StatusContext);

  return (
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
    </header>
  );
};
