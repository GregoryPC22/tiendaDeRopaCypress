describe('Search elements', ()=>{

    beforeEach(()=>{
        cy.visit('/');  //Solo se pone / porque se tiene una baseUrl
    })

    it('Search for elements with multiple results', ()=>{
        cy.search('dress')
        cy.fixture('searchResults'). then((searchResult)=>{
            cy.get(searchResult.title).should('contain','dress');
        })
    })

    it('search for element with no results', ()=>{
        cy.search('qwerty')
        cy.fixture('searchResults'). then((searchResult)=>{
            cy.get(searchResult.alert).should('contain','No results were found for your search');
        })
    })

    it('search for element with special code', ()=>{
        cy.readFile('tiendaDeRopa/support/text/search').then((text) => {
            cy.search('text')
        })
        
        cy.fixture('searchResults'). then((searchResult)=>{
            cy.get(searchResult.alert).should('contain','No results were found for your search');
        })
    })
})