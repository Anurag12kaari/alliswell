import mongoose from "mongoose";
import  express  from "express";
import { Todo } from "./models/todo.js";
let a= await mongoose.connect("mongodb://localhost:27017/")
const app = express()
const port = 3000
app.get('/', (req, res) => {
    const todo =new Todo({title:"Anurag",desc:"tujhe kya",isDone:false})
    todo.save()
  res.send('Hello Worl rand!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})