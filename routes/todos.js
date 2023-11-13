const express = require("express");
const router = express.Router();

const {createTodo} = require("../controllers/createTodo");
const dbConnect = require("../config/database");

//define api routes

router.post("/createTodo", createTodo);

module.exports = router;