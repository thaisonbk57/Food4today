const axios = require("axios");

module.exports.getRecipe = (req, res, next) => {
  axios
    .get(
      `https://www.food2fork.com/api/get?key=${process.env.KEY_API}&rId=35382`
    )
    .then(response => {
      console.log(response.data);
      res.end();
    })
    .catch(err => {
      res.status(500).send("Server doesn't work");
    });
};
