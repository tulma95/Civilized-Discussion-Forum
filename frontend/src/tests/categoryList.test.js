import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, cleanup } from '@testing-library/react'
import CategoryList from '../components/CategoryList'

afterEach(cleanup)

test('renders content', () => {
  const list = ['pets', 'cars']

  const component = render(
    <CategoryList list={list} />
  )

  expect(component.container).toHaveTextContent('cars')
})