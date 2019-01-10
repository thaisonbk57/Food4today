require("dotenv").config();

const http = require("http");
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");

const recipeRoutes = require("./routes/recipe.routes");

const app = express();
const server = http.createServer(app);

const PORT = process.env.PORT || 5000;

app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "views"));
app.set("static", path.resolve(__dirname, "public"));

app.use(express.json({ extendedUrl: false }));
app.use(morgan("tiny"));
app.use(cors());

app.use("/api/recipes", recipeRoutes);

server.listen(PORT, () => {
  console.log(`listening to port ${PORT}...`);
});
