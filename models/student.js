import mongoose from 'mongoose'

const studentSchema=new mongoose.Schema({
    name:{type:String,required:true,trim:true},
    age:{type:Number,required:true,mib:18,max:50},
    fees:{type:mongoose.Decimal128,required:true,validate:v=>v>=5500.50},
    hobbies:{type:Array},
    isActive:{type:Boolean},
    comments:[{value:{type:String},publish:{type:Date,
    default:Date.now}}],
    join:{type:Date,default:Date.now}
})
const studentModel=mongoose.model('student',studentSchema)
// const createDoc=async()=>{
//     try{
//         const studentDoc=new studentModel({
//             name:'Atin',
//             age:24,
//             fees:6000,
//             hobbies:['dancing','reading'],
//             isActive:true,
//             comments:[{value:'This is good mongoose'}]
//         })
//         const result=await studentDoc.save()
//         console.log(result)
//     }catch(err){
//         console.log(err)
//     }
// }
// const createDoc=async()=>{
//     const result=await studentModel.find()
//     console.log(result)
// }
// const updateDoc=async(id)=>{
//     try{
//         const result=await studentModel.updateOne({_id:id},
//             {name:'virat kholi'});
            
//         console.log(result)
//     }catch(error){
//         console.log(error);
//     }

// } 
const deleteOne=async(id)=>{
    try{
        const result=await studentModel.deleteOne({_id:id});
        console.log(result)
    }catch(err){
        console.log(error)
    }
}
// export default createDoc
// export {updateDoc}
 export   {deleteOne}