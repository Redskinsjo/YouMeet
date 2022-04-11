beforeEach(() => {
  cy.visit('/')
  cy.get('[data-test=signin]').eq(1).click()
})

describe('tests dom and page skeleton', () => {
  it('checks header and logo is present', () => {
    cy.get('[data-test=header]').should('exist')
    cy.get('[data-test=header] img').should('exist')
    cy.get('[data-test=header] img')
      .invoke('attr', 'src')
      .should(
        'eq',
        'data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27150%27%20height=%2755%27/%3e'
      )
  })
})
