const router = require('express').Router();
const path = require('path');

router.get("/", (req, res) => {
    console.log("Index requested!")
    res.sendFile(path.join(__dirname, '../public/index.html'))
})

router.get("/notes", (req, res) => {
    console.log("Notes requested!")
    res.sendFile(path.join(__dirname, '../public/notes.html'))
})

module.exports = router