import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import NewThreadForm from './NewThreadForm'
import Thread from '../presentationals/Thread'
import { useParams } from 'react-router-dom'
import { changeThreads } from '../../reducers/threadReducer'
import threadService from '../../services/threadService'
import './threadList.css'

const ThreadList = () => {
  const { category } = useParams()
  const dispatch = useDispatch()
  const threads = useSelector(state => state.threads)

  useEffect(() => {
    const initThreads = async () => {
      const threads = await threadService.getThreadsByCategory(category)
      dispatch(changeThreads(threads))
    }
    initThreads()
  }, [category, dispatch])

  const mapThreads = thread => {
    return <Thread key={thread.id} thread={thread} />
  }

  return (
    <div className='threadList'>
      <h1 className='categoryHeader'>{category}</h1>
      <div className='createThreadForm'>
        <NewThreadForm dispatch={dispatch} />
      </div>
      {threads.map(mapThreads)}
    </div>
  )
}

export default ThreadList
