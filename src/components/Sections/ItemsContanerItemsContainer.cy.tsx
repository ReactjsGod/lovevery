import React from 'react'
import ItemsContainer from './ItemsContaner'

describe('<ItemsContainer />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<ItemsContainer />)
  })
})