describe('Search elements', ()=>{

    beforeEach(()=>{
        cy.visit('/');  //Solo se pone / porque se tiene una baseUrl
    })

    it('Search for elements with multiple results', ()=>{
        cy.fixture('index').then((index)=>{
            cy.get(index.searchBox).type('dress');
            cy.get(index.searchButton).click();
        })
        cy.fixture('searchResults'). then((searchResult)=>{
            cy.get(searchResult.title).should('contain','dress');

        })
    })

    it('', ()=>{
        cy.fixture('index').then((index)=>{
            cy.get(index.searchBox).type('dress');
            cy.get(index.searchButton).click();
        })
        cy.fixture('searchResults'). then((searchResult)=>{
            cy.get(searchResult.title).should('contain','dress');

        })
    })
})