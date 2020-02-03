import React, { useEffect, useState } from 'react'
import Thread from './Thread'
import NewPostForm from '../containers/NewPostForm'
import { useParams } from 'react-router-dom'
import threadService from '../../services/threadService'

const SingleThread = () => {
  const [thread, setThread] = useState()
  const { category, id } = useParams()

  useEffect(() => {
    const fetchThread = async () => {
      const data = await threadService.getSingleThread(category, id)
      setThread(data)
    }
    fetchThread()
    window.scrollTo(0, 0)
  }, [category, id])

  if (thread === undefined) {
    return <div>loading</div>
  }

  return (
    <div>
      <Thread thread={thread} />
      <NewPostForm thread={thread} setThread={setThread} />
    </div>
  )
}

export default SingleThread
