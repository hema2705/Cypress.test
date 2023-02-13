describe("undersanding hooks",()=>{
    before("before",()=>{
        cy.log("before all");
    })

    beforeEach("before each",()=>{
        cy.log("before");
    })

    it("1st test case",()=>{
        cy.log("first test case")
    })
    it("2st test case",()=>{
        cy.log("secnd test case")
    })


    after("after",()=>{
        cy.log("after all");
    })

    afterEach("after each",()=>{
        cy.log("after");
    })
})





describe("undersanding hooks 2",()=>{
    before("before",()=>{
        cy.log("before all 2");
    })

    beforeEach("before each",()=>{
        cy.log("before 2");
    })

    it("1st test case",()=>{
        cy.log("first test case 2")
    })
    it("2st test case",()=>{
        cy.log("secnd test case 2")
    })


    after("after",()=>{
        cy.log("after all 2");
    })

    afterEach("after each",()=>{
        cy.log("after 2");
    })
})


after("after",()=>{
    cy.log("after all global");
})