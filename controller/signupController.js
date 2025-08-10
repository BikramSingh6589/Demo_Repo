const db = require("../db.js");
const bcrypt = require('bcryptjs');

const getsignUp = (req, res) => {
  res.render("signup");
};

const postsignUp = async (req, res) => {

    try {
        const { email, Password, name } = req.body;
  const result = await db.query("SELECT * FROM newuser WHERE email = $1", [
    email,
  ]);
  if (result.rows.length >= 1) {
    return res.send("user already exists");
  } 
  

  const hashedPass = await bcrypt.hash(Password,10);
  const putData = await db.query(
      "insert into newuser(name,email,password) values($1,$2,$3)",
      [name, email, hashedPass]
    );

    if (putData) console.log("Success");
    else console.log("Error");

    
    
    
 res.redirect('/signin');

    } catch (err) {
        console.log(err);
    }
  };

module.exports = { getsignUp, postsignUp };
