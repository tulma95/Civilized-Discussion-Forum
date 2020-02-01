import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import NewThreadForm from './NewThreadForm'
import Thread from '../presentationals/Thread'
import { useParams } from 'react-router-dom'
import { addThread, fetchThreads } from '../../reducers/threadReducer'
import threadService from '../../services/threadService'

import './threadList.css'

const ThreadList = props => {
  const { category } = useParams()
  const propsFetch = props.fetchThreads

  useEffect(() => {
    const fetchThreads = async () => {
      const threads = await threadService.getThreadsByCategory(category)
      propsFetch(threads)
    }
    fetchThreads()
  }, [category, propsFetch])

  const mapThreads = thread => {
    return <Thread key={thread.id} thread={thread} />
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
