const axios = require("axios");

const baseUrl = "https://www.food2fork.com/api";
const API_KEY = process.env.API_KEY;

// search recipes based on the keyword
module.exports.searchRecipes = async (req, res, next) => {
  const { keyword } = req.query;
  try {
    const response = await axios.get(
      `${baseUrl}/search?key=${API_KEY}&q=${keyword}`
    );
    res.status(200).send(response.data);
  } catch (err) {
    res.status(500).send({ msg: "Server is busy!", err });
  }
};

// get recipe detail with an Id.
module.exports.getRecipe = async (req, res, next) => {
  const { recipeId } = req.params;
  try {
    const response = await axios.get(
      `${baseUrl}/get?key=${API_KEY}&rId=${recipeId}`
    );

    const recipeDetail = response.data;
    res.status(200).send(recipeDetail);
  } catch (err) {
    res.status(500).send({ msg: "Server is busy!", err });
  }
};
