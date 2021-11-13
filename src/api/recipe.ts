const apiURL = 'https://www.themealdb.com/api/json/v1/1/random.php';

export const getRecipe = () => {
  return fetch(`${apiURL}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`${response.status} - ${response.status}`);
      }

      return response.json();
    });
};
