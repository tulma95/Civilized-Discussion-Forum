import React from 'react'
import { render } from '@testing-library/react'
import CategoryList from '../components/CategoryList'
import { BrowserRouter as Router } from 'react-router-dom';



test('renders content', () => {
  const list = ['pets', 'cars']

  const component = render(
    <Router>
      <CategoryList list={list} />
    </Router>
  )

  expect(component.container).toHaveTextContent('cars')
})