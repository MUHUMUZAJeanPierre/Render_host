const express = require("express");
const { createStudent, listStudent, deleteStudentById,  } = require("../Controllers/createStudent");
const {signUp, signIn} = require('../Controllers/Authontication.js');
const Routes = express.Router();



Routes.post('/signUp', signUp);
Routes.post('/signIn', signIn);
Routes.post("/create", createStudent);
Routes.get('/list', listStudent)
Routes.delete('/delete', deleteStudentById);

module.exports={Routes};