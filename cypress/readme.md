# Cypress documentation:

## npm init : Used for creatinmg pakage.json
## Cypress install : npm install cypress --save-dev
## Add *"/// <reference type ="cypress">"*    to identified cy commannd 
## enable npx install:  npm install -g npx

## mocha : prebundle with two fuction:
    describe("Test Login Page", ()=>{
        it ("user should login",()=>{

        })
    });

## xpath
> npm install -D cypress-xpath 
> add require('cypress/xpath') in e2e,js

## Assertions
> Prebundle with chail lib (https://www.chaijs.com/)    
> Assertion doc link: https://docs.cypress.io/guides/references/assertions#Adding-New-Assertions    
    > *Length*    
    cy.get('selector').should('have.length', 4);     
    > *Class*      
    cy.get('selector').should('not.have.class', 'disable');    
    > *value*      
    cy.get('selector').should('have.value', 'xyz');    
    > *Text Content*      
    cy.get('selector').should('have.text', 'xyz');       

    >.contains : one way to asser
     cy.get('locator').contains('text')

## Cypress chaining command
> cy.get(.productname).contains('shapoo').click();    
> cy.get(.wrapper).find(.productname).eq(0).click();

## Cypress scripts:
> cypress run : To run (default headless)      
> cypress run --headed: To run headed      
> cypress run --browser chrome: To run on chrome    
> cypress run --spec cypress/e2e/automation-test-store/contact-us.js : To run specific test case      
> cypress run --spec cypress/e2e/webdriver-uni/*     






## Cypress Command:
> cy.visit("www.google.com"); : Visit URL  
> cy.get("locator").clcik(); : Click specific element
> cy.document().should('have.property', 'charset');
> cy.title().should('include', 'title');
> cy.url().should('include', 'contactus');

    