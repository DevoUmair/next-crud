"use client"
import React, { useState } from 'react'
import {useRouter} from 'next/navigation'

const EditTopicForm = ({id , title , description}) => {
  const [newTitle , setNewTitle] = useState(title)
  const [newDesription , setNewDesription] = useState(description)

  const router = useRouter()

  const handleUpdateSubmit = async(e) => {
    e.preventDefault()

    try {
        const res = await fetch(`http://localhost:3000/api/topics/${id}` , {
            method:'PUT',
            headers:{
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({newTitle , newDesription})
        })

        if(!res.ok){
            throw new Error("Failed to update given element")
        }

        router.refresh()
        router.push("/")
    } catch (error) {
        console.log(error);
    }
  }


  return (
    <form onSubmit={handleUpdateSubmit} className='flex flex-col gap-2' >
        <input onChange={(e) => setNewTitle(e.target.value)} value={newTitle} className='border border-slate-500 px-8 py-2' type='text' placeholder='Topic Title' />
        <input onChange={(e) => setNewDesription(e.target.value) } value={newDesription} className='border border-slate-500 px-8 py-2' type='text' placeholder='Topic Description' />
        <button className='text-white py-3 px-6 w-fit bg-green-600' >Update Topic</button>
    </form>
  )
}

export default EditTopicForm