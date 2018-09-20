const express = require("express");
const router = express.Router();
var connection = require("../../helpers/db");

const AuthController = require("../../controllers/AuthController");
const controller = new AuthController();

router.post("/signup", (req, res, next) => {
  const { email, password, name, lastname } = req.body;
  let data = [email, password, name, lastname];
  connection.query(
    "INSERT INTO users(email, password, name, lastname) VALUES (?,?,?,?)",
    data,
    (error, results, fields) => {
      if (error) res.status(500).send(error);
      else res.status(201).send("youpi");
    }
  );
});

router.post("/record", (req, res) => controller.record(req, res));

module.exports = router;
