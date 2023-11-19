import React from 'react'
import PackageCard from './PackageCard'

describe('<PackageCard />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<PackageCard imgurl={''} header={''} description={''} url={''} />)
  })
})