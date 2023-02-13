describe('Reading fixture data', () => {
    beforeEach(function () {
        // "this" points at the test context object
        cy.fixture('example').then((data) => {
            // "this" is still the test context object
            this.data = data
        })
    })

    // the test callback is in "function () { ... }" form
    it('has email variable', function () {
        // this.user exists
        expect(this.data.email).to.equal('hello@cypress.io')
    })
})



describe("editing the fixture file", () => {
    it("adding pram dob", () => {
        //this will create new file at project scope
        cy.writeFile('example.json', { dob: 'Hema' })
    })
}
)