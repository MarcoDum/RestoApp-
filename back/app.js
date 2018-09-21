const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const authRouter = require("./routes/auth/auth"); //router as authRouter
const apiRouter = require("./routes/api/api");

//déclaration
const app = express();

//configuration
app.use(morgan("dev"));
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json({ limit: "10mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));

//fonctionalités

app.use("/auth", authRouter); //où authRouter est issu de l'importation
app.use("/api", apiRouter);
// j'implémente la partie API

/// dans le cas d'une route non trouvée, je retourne le code 404 'Not Found'
app.use(function(req, res, next) {
  var err = new Error("Not Found");
  err.status = 404;
  next(err);
});

//je lance le serveur node
let server = app.listen(process.env.PORT || 5000, function() {
  console.log("Listening on port " + server.address().port);
});
