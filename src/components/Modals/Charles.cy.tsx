import React from 'react'
import Charles from './Charles'

describe('<Charles />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Charles isOpen={false} onCloseModal={()=>{}} />)
  })
})