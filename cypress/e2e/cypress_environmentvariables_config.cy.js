// set the environment details as key value in a new file 
//cypress.env.json
describe("test retreving url from env varable",()=>
{
    it("launch url value extracting from envn",()=>
    {
        cy.visit(Cypress.env("url"))
        cy.log("page visited")
    })
})