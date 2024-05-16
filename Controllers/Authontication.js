const StudentUser = require ('../Modules/UserModal');
const bcrypt= require('bcryptjs');
const jwt = require('jsonwebtoken');
const studentStructure = require('../../Day 3/modules/studentStructure');


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


const signIn = async(req, res, next) => {    
    try {
        const already = await StudentUser.findOne({email: req.body.email});
        if(already){
            const valid = bcrypt.compareSync(req.body.password, already.password);
            if(valid){
                var secret = "gfgdcddccdtddsag";
                const token = jwt.sign({id: already._id}, secret, { expiresIn: "2d"})
                res.status(200).json({message: 'login successful', token});
            } else {
                res.status(400).json({message: 'incorrect password'});
            } 
        } else {
            res.status(400).json({message:'user does not exist'});
        }
    } catch (error) {
        res.status(500).json({message: 'failed to login', error});
    }
}

const signIn = async (req, res, next) => {
    try {
        const already = await StudentUser.findOne({email:req.body.email});
        if(already){
            const valid = bcrypt.compareSync(req.body.password, already.password);
            if(valid){
                var secret = "dfdjkkjfdkf"
                const token = jwt.sign({id:already.id}, secret, {experesIn: "2d"});
                res.status(200).json({message: 'login successful', token});
            }
        }
    } catch (error) {
        
    }
}

// const signIn = async(req, res, next) => {
//     try {
//      const alreadySignIn = await StudentUser.findOne({email:req.body.email});
//      if(alreadySignIn){
//         const valid = bcrypt.compareSync(req.body.password, alreadySignIn.password);
//         if(valid){
//             var secret = 'eeeeeeeeeeeeeee'
//             const token = jwt.sign({id:alreadySignIn._id}, secret,{expiresIn:'2'});
//             res.status(200).json({message: 'login successful', token});
//         } else {
//             res.status(400).json({message: 'incorrect password'});
//         }
//      } else{
//         res.status(400).json({message: 'user does not exist'});
//      }
//     } catch (error) {
//         req.status(400).json({message:"error", error});
//     }
// }
module.exports = {signUp, signIn}

 
const SignIn = async(req,res,next)=>{
    try {
        const {name, email, password} = req.body;
        const alreadyExist = await StudentUser.findOne({email})
        if(alreadyExist){
            const validate =  bcrypt.compareSync(req.email.body, alreadyExist.email);
            if(validate){
                const secrete = 'muhumuza comp'
                const token = jwt.sign({id:alreadyExist._id}, secrete, {experes:'2d'});
                res.status(200).json({message:'successfully log in ', token})
            } else{
                res.status(400).json({message:' password incorrect'})
            }
        } else {
            res.status(400).json({message:'user does not exist', error})
        }
    } catch (error) {
        res.status(400).json({message:'failed to login', error});
    }
}



