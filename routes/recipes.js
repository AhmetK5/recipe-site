const express = require("express");
const router = express.Router();
const db = require("../database"); 

router.get("/add", (req, res) => {
    res.render("add");
});

router.post("/add", (req, res) => {
    const { title, description, protein_type } = req.body;
    const sql = "INSERT INTO recipes (title, description, protein_type) VALUES (?, ?, ?)";

    db.query(sql, [title, description, protein_type], (err, result) => {
        if (err) throw err;
        res.redirect("/recipes");  
    });
});

router.get("/", (req, res) => {
    const sql = "SELECT * FROM recipes";
    db.query(sql, (err, results) => {
        if (err) throw err;
        res.render("list", { recipes: results });
    });
});
router.get("/:id", (req, res) => {
    const sql = "SELECT * FROM recipes WHERE id = ?";
    db.query(sql, [req.params.id], (err, result) => {
        if (err) throw err;
        if (result.length === 0) {
            return res.status(404).send("Recipe not found");
        }
        res.render("recipe", { recipe: result[0] });
    });
});

module.exports = router;
