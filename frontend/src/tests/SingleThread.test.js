import React from 'react'
import { render } from '@testing-library/react'
import SingleThread from '../components/SingleThread'


test('Singlethread show loading when thread is undefined', () => {

  const thread = undefined

  const component = render(
    <SingleThread thread={thread} />
  )


  expect(component.container)
    .toHaveTextContent('loading')
})