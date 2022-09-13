const express = require("express");
const router = express.Router();


router.get("/", (req, res) => {
    const data = ["hols", "desde mis productos"];
    res.send({data})
})

module.exports= router;