import React from 'react'
import { render } from '@testing-library/react'
import Post from '../components/Post'


test('renders single post', () => {
  const post = {
    id: 4,
    thread_id: 2,
    user_id: 1,
    image: null,
    content: "Autoilla pääsee kovaa prum prum",
    createdAt: "2020-01-06T20:47:39.747Z",
    updatedAt: "2020-01-06T20:47:39.747Z"
  }
  const component = render(
    <Post post={post} />
  )

  const expectedDate = new Date(post.createdAt).toLocaleString()

  expect(component.container.querySelector('.info'))
    .toHaveTextContent(expectedDate)
})