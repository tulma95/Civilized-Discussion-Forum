import React from 'react';
import Thread from './Thread'
import NewPostForm from './NewPostForm'

const SingleThread = ({ thread, setThreads, allThreads }) => {

  if (thread === undefined) {
    return <div>loading</div>
  }

  return (
    <div>
      ----------------
      <Thread thread={thread} />
      <NewPostForm
        allThreads={allThreads}
        threadId={thread.id}
        setThreads={setThreads} />
    </div>
  );
};

export default SingleThread;