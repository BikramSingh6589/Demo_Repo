const getRequest = (req,res)=>{
        const userD = req.session.userDetails;
        res.render("index.ejs", {ud : userD});
}

module.exports = getRequest;