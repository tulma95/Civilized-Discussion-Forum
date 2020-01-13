import React from 'react'
import { render } from '@testing-library/react'
import ThreadList from '../components/ThreadList'
import { BrowserRouter as Router } from 'react-router-dom';


test('renders single thread', () => {
  const threads = [{
    id: 2,
    title: "Koulussa on kivaa",
    user_id: 1,
    category: "music",
    createdAt: "2020-01-06T20:47:39.743Z",
    updatedAt: "2020-01-06T20:47:39.743Z",
    posts: []
  }]

  const component = render(
    <Router>
      <ThreadList allThreads={threads} category={'music'} />
    </Router>
  )

  expect(component.container.querySelector('.threadTitle'))
    .toHaveTextContent('Koulussa on kivaa')
})