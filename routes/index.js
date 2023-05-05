var express = require("express");
var router = express.Router();
const { v4: uuidv4 } = require("uuid");

// TASK DATABASE
let LOCALDB = [];

/* GET home page. */
router.get("/", function (req, res, next) {
    res.render("index", { title: "Task Application", tasks: LOCALDB });
});

/* POST Create task. */
router.post("/createtask", function (req, res, next) {
    const task = {
        id: uuidv4(),
        title: req.body.title,
        description: req.body.description,
    };
    LOCALDB.push(task);
    res.redirect("/");
});

/* GET Delete Task. */
router.get("/deletetask/:id", function (req, res, next) {
    LOCALDB = LOCALDB.filter((task) => task.id !== req.params.id);
    res.redirect("/");
});

module.exports = router;
