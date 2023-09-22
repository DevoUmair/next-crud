"use client"
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

const AddTopicpage = () => {
  const [title , setTitle] = useState()
  const [description , setDescription] = useState()

  const router = useRouter()

  const handleSubmitTopic = async (e) => {
    e.preventDefault()

    if(!title || !description){
        alert('Title and desription required')
    }

    try {
        const res = await fetch('http://localhost:3000/api/topics' , {
            method:'POST',
            headers:{
                "Content-Type" : "application/json"
            },
            body : JSON.stringify({title , description})
        })
        if(res.ok){
            router.refresh()
            router.push('/')
        }else{
            throw new Error("Failed to create topic")
        }
    } catch (error) {
        console.log("Error adding data to database : " , error);
    }
  }

  return (
    <form onSubmit={handleSubmitTopic} className='flex flex-col gap-2' >
        <input value={title} onChange={(e) => setTitle(e.target.value)} className='border border-slate-500 px-8 py-2' type='text' placeholder='Topic Title' />
        <input value={description} onChange={(e) => setDescription(e.target.value)} className='border border-slate-500 px-8 py-2' type='text' placeholder='Topic Description' />
        <button type='submit' className='text-white py-3 px-6 w-fit bg-green-600' >Add Topic</button>
    </form>
  )
}

export default AddTopicpage