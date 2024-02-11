/// <reference types="cypress" />

import BaraholkaPage from "../../pages/baraholkaPage";

const baraholka = new BaraholkaPage();

describe("Serach", () => {
    beforeEach(() => {
        baraholka.visit();
    });

    it("Should find item", () => {
        cy.contains("a", "Кошки").click();
    });
});