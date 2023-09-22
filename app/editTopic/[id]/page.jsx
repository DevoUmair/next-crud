import EditTopicForm from '@/components/EditTopicForm'
import React from 'react'

const getTopicByid = async (id) => {
    try {
        const res = await fetch(`http://localhost:3000/api/topics/${id}` , {
            cache:'no-store'
        })

        if(!res.ok){
            throw new Error("Failed to fetch data")
        }

        return res.json()
    } catch (error) {
        
    }
}

const EditTopicpage = async ({params}) => {  
  const {id}  = params
  const topic = await getTopicByid(id)
  const {title , description} = topic


  return (
    <EditTopicForm id={id}  title={title} description={description} />
  )
}

export default EditTopicpage