/// <reference types ='cypress' />

import {describe, it } from "mocha";

describe('Contact Us Page Validation', () => {
    it('Add contact-us page and verify message', () => {
        cy.visit("https://automationteststore.com/");
        cy.xpath("//a[text()='Contact Us']").click();
        cy.get('#ContactUsFrm_first_name').type('sachin');
        cy.get('#ContactUsFrm_email').type('msachinshelke@gmail.com');
        cy.get('#ContactUsFrm_enquiry').type('test Enquiry');
        cy.get('button[title="Submit"]').click();
        cy.get('.mb40 > :nth-child(3)').should('have.text', 'Your enquiry has been successfully sent to the store owner!');


    });
    
});
