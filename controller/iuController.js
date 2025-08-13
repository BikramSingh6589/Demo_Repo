const multer = require('multer');
const path = require('path');

const storage  = multer.diskStorage({
    destination : (req,file,cb)=>{
        cb(null,path.join(__dirname, '../uploads'));
    },
    filename : (req,file,cb)=>{
        const suffix = Date.now();
        cb(null,suffix+'-'+file.originalname);
    }
})

const upload= multer({storage});

const getUploads = (req,res)=>{
    res.render('image.ejs');
}

const postUploads = (req,res)=>{
    const photopath = req.file? req.file.path:null;
    console.log(photopath);
}


module.exports = {getUploads,postUploads}