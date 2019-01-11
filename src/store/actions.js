import axios from "axios";
import actionTypes from "./actionTypes";

// TODO: change this to realy backend server later.
const baseUrl = "http://192.168.178.153:5000";

// fetch recipes based on searching keywords
const fetchRecipes = keyword => dispatch => {
  axios
    .get(`${baseUrl}/api/recipes?keyword=${keyword}`)
    .then(response => {
      dispatch({
        type: actionTypes.fetchRecipes,
        recipes: response.data.recipes
      });
    })
    .catch(err => {
      console.log(err);
    });
};

// get recipe detail based on the recipeId
const getRecipe = recipeId => dispatch => {
  axios
    .get(`${baseUrl}/api/recipes/${recipeId}`)
    .then(response => {
      dispatch({
        type: actionTypes.getRecipe,
        recipe: response.data
      });
    })
    .catch(err => {
      console.log(err);
    });
};

// include all actions into one object and export default
const actions = {
  fetchRecipes,
  getRecipe
};

export default actions;
