import React from 'react'
import { connect } from 'react-redux'
import NewThreadForm from './NewThreadForm'
import Thread from '../presentationals/Thread'
import { useParams } from 'react-router-dom'
import { addThread, fetchThreads } from '../../reducers/threadReducer'
import threadService from '../../services/threadService'

import './threadList.css'
import { useEffect } from 'react'

const ThreadList = props => {
  const { category } = useParams()

  useEffect(() => {
    const fetchThreads = async () => {
      const threads = await threadService.getThreadByCategory(category)
      props.fetchThreads(threads)
    }
    fetchThreads()
  }, [category])

  const mapThreads = thread => {
    const threadWith3Post = { ...thread, posts: thread.posts.slice(-3) }
    return <Thread key={thread.id} thread={threadWith3Post} />
  }

  return (
    <div className='threadList'>
      <h1 className='categoryHeader'>{category}</h1>
      <div className='createThreadForm'>
        <NewThreadForm
          allThreads={props.threads}
          setThreads={props.addThread}
        />
      </div>
      {props.threads.map(mapThreads)}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    threads: state.threads
  }
}

const mapDispatchToProps = {
  addThread,
  fetchThreads
}

const connectedThreadList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ThreadList)

export default connectedThreadList
