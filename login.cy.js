describe('login demos', () => {
    it('successfully login using correct username and password', () => {
        cy.visit('https://demos2.prospark.co/login')
        cy.get("[name='username']").type('Mike_learner').should('have.value', 'Mike_learner')
        cy.get("[placeholder='Password']").type('142130Ab!dzar').should('have.value', '142130Ab!dzar')
        cy.wait(1000)
        cy.get("[type='submit']").should('exist').click()
        cy.url().should('include', 'prospark.co')
    })
})
 