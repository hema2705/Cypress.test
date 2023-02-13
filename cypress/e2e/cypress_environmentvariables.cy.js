// set the environment details as key value in config.js file 
describe("test retreving url from env varable",()=>
{
    it("launch url value extracting from envn",()=>
    {
        cy.visit(Cypress.env("login_url"))
        cy.log("page visited")
    })
})