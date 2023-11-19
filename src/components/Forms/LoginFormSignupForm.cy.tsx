import React from 'react'
import SignupForm from './LoginForm'

describe('<SignupForm />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<SignupForm />)
  })
})