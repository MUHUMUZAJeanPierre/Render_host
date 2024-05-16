const studentData = require('../Modules/UserModal');
// const createStudent = async(req,res,next)=>{
//   try {
//     const alreadyExist= await studentData.findOne({email:req.body.email});
//     if(alreadyExist){
//       res.status(400).json({ message: 'email already exist'})
//     } else{
//       const create = await studentData.create(req.body);
//       res.status(201).json({message:"student added", create});
//     }
   
//   } catch (error) {
//     res.status(500).json({message:'failed to save', error});
//   }
// }


// const updateStudent = async(req,res,next)=>{
//     try {
//       const update = await studentData.findOneAndUpdate({_id:req.query.id},req.body);
//       res.status(200).json({message:'student updated',update});
//     } catch (error) {
//       res.status(500).json({message:'failed to update', error});
//     }
// }



// const listStudent = async(req, res)=>{
//   try {
//     const listStudent = await studentData.find({});
//     res.status(200).json({message:'student list',listStudent});
//   } catch (error) {
//       res.status(500).json({message:'failed to list students',error});
//   }
// }

// const searchByName = async(req,res,next)=>{
//   try {
//     const searchByName = await studentData.find({name:req.query.name});
//     res.status(200).json({message:'student search by name',searchByName});
//   } catch (error) {
//       res.status(500).json({message:'failed', error})
//   }
// }
// module.exports={createStudent, updateStudent, listStudent, searchByName}

// const studentData = require('../Modules/StudentModal');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const signUp = async (req,res,next)=>{
//   try {
//     const {email, password} = req.body
//     const already = await studentData.findOne({email:req.body.email});
//     if(already){
//       res.status(400).json({message:'User already exists'});
//     } else {
//       const encrypted = bcrypt.hashSync(password, 10);
//       const toSave ={
//         email,
//         password: encrypted
//       }
//       const create = await studentData.create(toSave);
//       res.status(200).json({message:'user created successfully', create});
//     }
//   } catch (error) {
//     res.status(500).json({message:'Error creating user', error});
//   }
// }

// const signIn = async (req,res,next)=>{
//   try {
//     const alreadyExist = await studentData.findOne({email:req.body.email})
//     if(alreadyExist){
//       const match = bcrypt.compareSync(req.body.password,alreadyExist.password);
//       if(match){
//         var secret = "gfgdcddccdtddsag";
//         const token = jwt.sign({id:alreadyExist._id},secret,{expiresIn: '12d'});
//         res.status(200).json({message:'login successful', token});
//       } else{
//         res.status(400).json({message: 'password is incorrect'});
//       }
//     } else {
//       res.status(400).json({message:'user does not exist'});
//     }
//   } catch (error) {
//     res.status(400).json({message:'failed to log in', error});
//   }
// }
const createStudent = async(req,res,next)=>{
  try {
    const alreadyExist = await studentData.findOne({email:req.body.email})
    if(!alreadyExist){
      const create = await studentData.create(req.body);
      res.status(200).json({message:'users created successfully', create});
    } else{
      res.status(400).json({message:'users already exist'})
    }
  } catch (error) {
    res.status(500).json({message:'error creating', error});
}
}
const updateStudent = async(req,res,next)=>{
  try {
    const updateStudent = await studentData.findOneByIdAndUpdate({_id:req.query.id}, req.body);
    res.status(200).json({message:'update student successfully'}, updateStudent)
  } catch (error) {
    res.status(500).json({message:'update unsuccessful', error});
  }
}

const listStudent = async(req,res, next)=>{
  try {
    const listAllStudent = await studentData.find({});
    res.status(200).json({message:'list all students successfully ', listAllStudent});
  } catch (error) {
    res.status(500).json({message:'failed to list all students', error})
  }
}

const searchByName = async(req,res,next)=>{
  try {
    const searchByName = await studentData.find({name:req.body.name});
    res.status(200).json({message:'search by name successfully', searchByName});
  } catch (error) {
    res.status(500).json({message:'failed to search by name unsuccessful'}, error);
  }
}

const deleteStudentById = async (req, res) => {
  try {
    const deletedStudent = await StudentData.findOneAndDelete({ _id: id.query.id });

    if (!deletedStudent) {
      return res.status(404).json({ message: 'Student not found' });
    }
    res.status(200).json({ message: 'Student deleted successfully', deletedStudent });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting student', error: error.message });
  }
};

module.exports = {createStudent, updateStudent,listStudent, searchByName, deleteStudentById}