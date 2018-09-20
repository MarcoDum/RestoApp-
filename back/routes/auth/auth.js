const express = require("express");
const router = express.Router();
const  bodyParser  =  require('body-parser');
var connection = require("../../helpers/db");


router.use(bodyParser.urlencoded({ extended:  false }));
router.use(bodyParser.json());


router.post('/signup',(req, res, next) => {
    const {email, password, name, lastname} = req.body;
    let data = [email, password, name, lastname];
  connection.query('INSERT INTO users(email, password, name, lastname) VALUES (?,?,?,?)',
  data, (error, results, fields) => {
    if (error)
      res.status(500).send(error);
    else
      res.status(201).send("youpi");
  })
})

module.exports = router;


/*
[
	{
        "email": "nji@gfg.gh", 
		"password": "azertyuiop", 
    	"name": "bob", 
    	"lastname": "obo"
	}
]
*/