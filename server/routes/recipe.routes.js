const express = require("express");
const recipeController = require("./../controllers/recipe.controllers");

const router = express.Router();

router.get("/", recipeController.searchRecipes);

router.get("/:recipeId", recipeController.getRecipe);

module.exports = router;
