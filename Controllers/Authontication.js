// const StudentUser = require ('../Modules/UserModal');
// const bcrypt= require('bcryptjs');
// const jwt = require('jsonwebtoken');
// // const studentStructure = require('../../Day 3/modules/studentStructure');


//   const signUp = async(req,res,next)=>{
//         try {
//         const {name, email, password} = req.body;
//         const alreadyExist = await StudentUser.findOne({email});
//         if(alreadyExist){
//             res.status(400).json({message:'user already exists'});
//         } else {
//             const encrypted = bcrypt.hashSync(password,10);
//             const to={
//                 name,
//                 email,
//                 password:encrypted
//             }
//             const create = await StudentUser.create(toSave);
//             res.status(200).json({message:'user created successfully', create});
//         }
//     } catch (error) {
//         res.status(500).json({message:'error creating', error});
//     }
// }


// const signIn = async(req, res, next) => {    
//     try {
//         const already = await StudentUser.findOne({email: req.body.email});
//         if(already){
//             const valid = bcrypt.compareSync(req.body.password, already.password);
//             if(valid){
//                 var secret = "gfgdcddccdtddsag";
//                 const token = jwt.sign({id: already._id}, secret, { expiresIn: "2d"})
//                 res.status(200).json({message: 'login successful', token});
//             } else {
//                 res.status(400).json({message: 'incorrect password'});
//             } 
//         } else {
//             res.status(400).json({message:'user does not exist'});
//         }
//     } catch (error) {
//         res.status(500).json({message: 'failed to login', error});
//     }
// }


// module.exports = {signUp, signIn}


