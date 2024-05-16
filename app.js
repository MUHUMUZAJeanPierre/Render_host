const express = require('express');
const app = express()
const mongoose = require('mongoose');
const {Routes} = require('./routes/studentOneRoute');
const multer= require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null,'./imageFile')
    },
    filename:(req,file,cb)=>{
        cb(null,`${Date.now()}_${file.originalname}`)
    }
})
// app.use('/api/user', Routes);

const imageUpload = multer({storage:storage});
app.post('/images/upload', imageUpload.single("upload"),(req, res) => {
    console.log(req.file);
})

app.use(express.json());
app.use('/students', Routes);
app.listen(4000, ()=>{
    mongoose.connect("mongodb+srv://Muhumuza:Muhumuza%402803@cluster0.tfwujo8.mongodb.net/dataBaseName")
    console.log('backend side');
});