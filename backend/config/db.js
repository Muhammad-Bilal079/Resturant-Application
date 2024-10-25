import mongoose from "mongoose";

const dbConnection = () =>{
    mongoose.connect(process.env.MONGO_URL)
    .then(()=>console.log('DB connected'))
    .catch((err)=>console.log('DB connection error',err))
}

export default dbConnection