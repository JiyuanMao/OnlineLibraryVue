describe('The Admin Page Test', function () {
    it('Go Admin Page without login', function () {
        cy.visit('/#/Admin') // change URL to match your dev URL
    });

    it('Redirect to home', function () {
        cy.url()
    });

    it('Do Admin Login', function () {
        cy.visit('/#/login'); // change URL to match your dev URL
        cy.get('input[type=text]:visible').type('zoe');
        cy.get('input[type=password]:visible').type('123456');
        cy.get('button[type=submit]:visible').click()
    });

    it('Go Admin Page', () => {
        cy.wait(2000);
        cy.get("a[href=\"#/Admin\"]").click();
        cy.wait(10000);
        cy.location('href').should('include', 'Admin')
    });

    it('Test Add Books', () => {
        cy.get(".btn-success").click();
        cy.wait(100);
        cy.get("input[placeholder=\"Enter name\"]:visible").type("New book name**********************");
        cy.get("input[placeholder=\"Enter author\"]:visible").type("New book author");
        cy.get("input[placeholder=\"Enter publisher\"]:visible").type("New book publisher");
        cy.get("input[placeholder=\"Enter category\"]:visible").type("New book category");
        cy.get(".btn-primary:visible").click();
        // cy.get(".btn-secondary:visible").click({multiple: true});
        cy.wait(1000);
    });

    it("Check add results", () => {
        cy.get("td[aria-colindex=1]").contains("New book name**********************")
    });

    it("Test filter function", () => {
        cy.get("input[placeholder=\"Enter to filter books\"]").type("New book name**********************");
        cy.wait(500);
        cy.get("td[aria-colindex=1]").contains("New book name**********************");
        cy.get("input[placeholder=\"Enter to filter books\"]").type("{selectall}{backspace}").type("New book name#############",);
        cy.wait(500);
        cy.get("td[aria-colindex=1]").should('not.exist');
        cy.get("input[placeholder=\"Enter to filter books\"]").type("{selectall}{backspace}");
    });

    it("Click to  modify results", () => {
        cy.wait(1000);
        cy.get("tr").contains("New book name**********************").parent().find(".btn-info").click();
        cy.get("input[placeholder=\"Enter name\"]:visible").type("#");
        cy.get(".btn-primary:visible").click();
        cy.wait(1000);
    });

    it("Check modify results", () => {
        cy.get("td[aria-colindex=1]").contains("New book name**********************#")
    });

    it("Delete results", () => {
        cy.get("tr").contains("New book name**********************#").parent().find(".btn-danger").click();
        cy.wait(1000);
        cy.contains("New book name***************").should('not.exist');
    });
});
