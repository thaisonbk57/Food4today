import actionTypes from "./actionTypes";

const initState = {};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.fetchRecipes:
      return {
        ...state,
        recipes: [...action.payload.recipes]
      };
    case actionTypes.getRecipe:
      return {
        ...state,
        currentRecipe: action.payload.recipe
      };
    default:
      return state;
  }
};

export default reducer;
