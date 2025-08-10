const about = (req,res)=>{
    const user = req.session.userDetails;
    res.render("about.ejs" , ud = user);
}

module.exports = about;