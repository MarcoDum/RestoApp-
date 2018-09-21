const express = require("express");
const router = express.Router();

/**
 * Routing for Pages
 */
const AuthController = require("../../controllers/AuthController");
const controller = new AuthController();

router.get("/map", (req, res) => controller.loading(req, res));
router.post("/signin", (req, res) => controller.signin(req, res));
router.post("/signup", (req, res) => controller.recordUser(req, res));
router.post("/record", (req, res) => controller.record(req, res));

module.exports = router;
