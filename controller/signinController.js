const db = require('../db.js');
const bcrypt = require('bcryptjs');

const get = (req,res)=>{
res.render('signin');
}


const post = async (req,res)=>{

    try {    
        const {email , Password} = req.body;
        const result = await db.query('SELECT * FROM newuser where email = $1',[email]);
        if(result.rows.length == 0){
            res.redirect('/signup');
        }

    

        const originalPass =await bcrypt.compare(Password,result.rows[0].password);
        
        if(originalPass){
            
        req.session.userDetails = {
            email: result.rows[0].email,
            Password: result.rows[0].password,
            name: result.rows[0].name,
  };
            res.redirect('/');
        }
        else{
            res.send("Incorrect Password");
        }

    } catch (error) {
        console.log(error);
    }
}   


module.exports = {get,post};