import React from 'react'
import { render, cleanup } from '@testing-library/react'
import CategoryList from '../components/CategoryList'


test('renders content', () => {
  const list = ['pets', 'cars']

  const component = render(
    <CategoryList list={list} />
  )

  expect(component.container).toHaveTextContent('cars')
})