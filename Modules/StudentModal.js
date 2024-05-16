// const mongoose = require('mongoose');

// const studentData = mongoose.Schema(
//     {
//         name:{
//             require:true,
//             type: String
//         },
//         email:{
//             require: require,
//             type: String
//         },
//         gender:{
//             require:true,
//             type:String,
//             enum:{
//                 values:["male", "female"],
//                 message: 'gender is required'
//             }
//             }
//     }
// )

// module.exports=mongoose.model('studentDataOneStructure', studentData);

const mongoose = require('mongoose');
const studentData= mongoose.Schema({
    name:{
        required:true,
        type:String,

    },
    email:{
        required:true,
        type:String
    },
    gender:{
        required:true,
        type:String,
        enum:{
            values:["male", "female"],
            message: 'gender is required'
        }
    }
});

module.exports = mongoose.model('studentDataTwoStructure', studentData);