import React from 'react'
import Post from './Post'
import { Link } from 'react-router-dom'
import NewThreadForm from './NewThreadForm'

const ThreadList = ({ setThreads, category, allThreads }) => {

  const filterList = (threads, category) => {
    return threads.filter(e => e.category === category)
  }

  const sortListByUpdateDate = (e1, e2) => {
    return e1.updatedAt > e2.updatedAt ? -1 : 1
  }

  const filteredThreads =
    filterList(allThreads, category)
      .sort(sortListByUpdateDate)




  const mapThread = (thread) => {

    return (
      <div key={thread.id} className='thread'>

        <div className='threadHeader'>
          <Link to={`/${thread.category}/${thread.id}`}>
            <h1 className='threadTitle'>
              {thread.title}
            </h1>
          </Link>
        </div>

        <div className='threadContent'>
          <div className='thredContentImage'>
            {thread.imageUrl && <img src={thread.imageUrl} alt='' />}
          </div>
          <div className='theadContentText'>
            {thread.content}
          </div>
        </div>



        <div className='posts'>
          {thread.posts.map(post => (
            <Post key={post.id} post={post} />
          ))}
        </div>

      </div>
    )
  }

  return (
    <div>
      <NewThreadForm
        setThreads={setThreads}
        allThreads={allThreads}
        category={category} />

      {filteredThreads.map(mapThread)}
    </div>
  )
}

export default ThreadList