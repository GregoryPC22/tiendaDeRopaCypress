describe('Login', () => {
    beforeEach(()=> {
        cy.visit('/')
    })
    it('Login with incorrect email', () => {
        cy.login('something', 'other')

        cy.fixture('login').then((login)=>{
            cy.get(login.incorrectLoginBanner).should('contain','Invalid email address');
        })
    })
    /*
    it('Login with incorrect email', () => {
        cy.fixture('login').then((login)=>{
            cy.get(login.loginLink).click();
            cy.get(login.email).type('something');
            cy.get(login.passwd).type('other');
            cy.get(login.loginButton).click();
            cy.get(login.incorrectLoginBanner).should('contain','Invalid email address');
        })
    }) */


    /*
    it('Login with incorrect email', () => {
        cy.get('.login').click();
        cy.get('#email').type('something');
        cy.get('#passwd').type('other');
        cy.get('#SubmitLogin > span').click();
        cy.get('ol > li').should('contain','Invalid email address');
    });
*/


});
