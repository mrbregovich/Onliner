class BaraholkaPage {
    visit() {
        cy.visit("https://baraholka.onliner.by/");
    }

    get searchInput() {
        return cy.get("#fleaMarketSearchInput");
    }

    get searchbtn() {
        return cy.get("#fleaMarketSearch button");
    }
}

export default BaraholkaPage;