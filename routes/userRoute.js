import express from "express"
import createDoc  from '../models/student.js'

const route = express.Router();


route.post ("/create",createDoc)


export default route;