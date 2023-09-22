import connectMongoDb from "@/libs/mongodb"
import Topic from "@/models/topic"
import { NextResponse } from "next/server"

export async function POST(request){
    const {title , description} = await request.json()

    await connectMongoDb()

    const topic = await Topic.create({
        title,
        description
    })

    return NextResponse.json(topic  , {status:200})
}

export async function GET(){
    await connectMongoDb()
    const topics = await Topic.find()
    return NextResponse.json(topics , {status : 200})
}

export async function DELETE(request){
    const {searchParams} = new URL(request.url)
    const id = searchParams.get("id")
    await connectMongoDb()

    await Topic.findByIdAndDelete(id)
    return NextResponse.json({message:"Topic Deleted"} , {status:200})
}

