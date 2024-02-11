/// <reference types="cypress" />

import TopMenu from "../../pages/topmenu";

const topMenu = new TopMenu();

describe("Navigation menu smoke tests", () => {
    beforeEach(() => {
        cy.visit("/");
    });

    it("Should open catalog page", () => {
        topMenu.catalog.click();
        cy.url().should("include", "catalog");
    });

    it("Should open forum page", () => {
        topMenu.forum.click();
        cy.url().should("include", "forum");
    });

    it("Should open baraholka page", () => {
        topMenu.baraholka.click();
        cy.url().should("include", "baraholka");
    });
});