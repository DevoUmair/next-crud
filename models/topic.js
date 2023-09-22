import mongoose from 'mongoose'

const topicSchema = mongoose.Schema({
    title:String,
    description:String,
},{
    timestamps :true
})

const Topic = mongoose.models.Topic ||  mongoose.model("Topic" , topicSchema)
export default Topic