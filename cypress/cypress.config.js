const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  supportFile: false,
  
  baseUrl: 'https://opensource-demo.orangehrmlive.com/web/index.php',
  chromeWebSecurity: false,
  },
});
