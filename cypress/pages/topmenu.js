class TopMenu {
    get catalog() {
        return cy.contains(".b-main-navigation__link", "Каталог");
    }

    get baraholka() {
        return cy.contains(".b-main-navigation__link", "Барахолка");
    }

    get forum() {
        return cy.contains(".b-main-navigation__link", "Форум");
    }
}

export default TopMenu;