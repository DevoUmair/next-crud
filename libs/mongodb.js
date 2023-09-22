import mongoose from 'mongoose'

const connectMongoDb = async () => {
    try {
        await mongoose.connect(process.env.CONNECTION_STRING)
        console.log("Connected to Mongo Db");
    } catch (error) {
        console.log("mongo db error");
    }

   
}

export default connectMongoDb