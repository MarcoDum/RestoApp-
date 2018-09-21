const connection = require("../helpers/db");
/**
 * Class Pages Controller
 */
class AuthController {
  /**
   * Page about
   * @param {*} req
   * @param {*} res
   */

  recordUser(req, res, err) {
    console.log(req.body);
    const user = req.body;
    // const id_restaurant = parseInt(req.params.id_restaurant);
    // const id_user = 54;
    connection.query("INSERT INTO users SET ?", user, function(error, result) {
      if (error) throw error;
    });
    if (err) res.status(500).json({ flash: error.message });
    else res.status(200).json({ flash: "User created !" });
    res.end();
  }

  loading(req, res, err) {
    connection.query("SELECT * FROM restaurants LIMIT 200", function(
      error,
      result
    ) {
      if (err) {
        res.status(500).json({ flash: error.message });
      } else {
        res.send(result);
      }
      // console.log(res);
      // if (err) res.status(500).json({ flash: error.message });
      // else res.status(200).json({ flash: "User created !" });
    });
  }

  signin(req, res, err) {
    if (err) res.status(500).json({ flash: err.message });
    else res.status(200).json({ flash: "User has been signed in !" });
    res.end();
  }

  record(req, res, err) {
    const resto = req.body;
    let restoo = resto.map(e => [
      e.name,
      e.address1,
      e.address2,
      e.area,
      e.city,
      e.mainCategory,
      e.secondaryCategory,
      e.editorial_rating,
      e.description,
      e.annotation,
      e.owner_annotation,
      e.to_website,
      e.image_url,
      e.latitude,
      e.longitude
    ]);
    console.log(restoo);
    connection.query(
      "INSERT INTO restaurants (name, address1, address2, area,city,mainCategory,secondaryCategory,editorial_rating,description,annotation,owner_annotation,to_website,image_url,latitude,longitude) VALUES ?",
      [restoo],
      function(error, res) {
        if (error) throw error;
      }
    );

    if (err) res.status(500).json({ flash: error.message });
    else res.status(200).json({ flash: "User created !" });
    res.end();
  }
}

module.exports = AuthController;
