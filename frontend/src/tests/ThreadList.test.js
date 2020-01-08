import React from 'react'
import { render, cleanup } from '@testing-library/react'
import ThreadList from '../components/ThreadList'

test('renders single thread', () => {
  const threads = [{
    id: 2,
    title: "Koulussa on kivaa",
    user_id: 1,
    category: "DataTypes.STRING",
    createdAt: "2020-01-06T20:47:39.743Z",
    updatedAt: "2020-01-06T20:47:39.743Z",
    posts: []
  }]

  const component = render(
    <ThreadList threads={threads} />
  )

  expect(component.container.querySelector('.threadTitle'))
    .toHaveTextContent('Koulussa on kivaa')
})