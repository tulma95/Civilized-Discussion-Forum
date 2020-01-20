import React from 'react'
import { render } from '@testing-library/react'
import Thread from '../components/Thread'


test('thread show loading when thread is undefined', () => {

  const thread = undefined

  const component = render(
    <Thread thread={thread} />
  )


  expect(component.container)
    .toHaveTextContent('loading')
})