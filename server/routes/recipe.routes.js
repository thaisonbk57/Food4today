const express = require("express");
const recipeController = require("./../controllers/recipe.controllers");

const router = express.Router();

router.get("/", recipeController.getRecipe);

module.exports = router;
