

it('visit google and search Automation step by step', ()=>{
    cy.visit('https://google.com')
    cy.get('[name="q"]')
    .type('Automation step by step')
    .type('{enter}')
})