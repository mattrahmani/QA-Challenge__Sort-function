const { defineConfig } = require("cypress");
// import chaiSorted from "chai-sorted"
// chai.use(chaiSorted);
require('chai-sorted');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://craftcartel.com.au/',
    viewportHeight: 1080,
    viewportWidth: 1920,
    // viewportHeight: 844,
    // viewportWidth: 390,
    setupNodeEvents(on, config) {
      on('task', {
        log(message) {
          console.log(message)

          return null
        },
      })
    },
  },
});
