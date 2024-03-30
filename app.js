import express from 'express'
import connectDB from './db/connection.js'
// import createDoc from './models/student.js'
// import {updateDoc} from './models/student.js'
import {deleteOne} from './models/student.js'
const app=express()
const port=process.env.PORT||'3000'
const DATABASE_URL=process.env.DATABASE_URL||"mongodb://localhost:27017"



connectDB(DATABASE_URL)
// createDoc()
// updateDoc('6607b54794dcf6d9b9ef4542')
deleteOne('6607b542d2805562dd2e7b45')

app.listen(port,()=>{
    console.log(`server listening at http://localhost:${port}`)
})
