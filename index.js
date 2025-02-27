const express = require("express");
const mysql = require("mysql2");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");

dotenv.config();

const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
const indexRoutes = require("./routes/index");
const recipeRoutes = require("./routes/recipes");

app.use("/", indexRoutes);  
app.use("/recipes", recipeRoutes);
const db = require("./database");  

app.listen(3000, () => console.log("Server running on port 3000"));

