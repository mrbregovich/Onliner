const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://onliner.by/',
    specPattern: 'cypress/tests/**/*.cy.{js,jsx}',
    viewportWidth: 1920,
    viewportHeight: 1080,
  },
});
