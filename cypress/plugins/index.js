/**
 * @type {Cypress.PluginConfig}
 */

const webpackPreprocessor = require('@cypress/webpack-preprocessor')

module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config

  const options = {
    webpackOptions: require("../webpack.config"),
    watchOptions: {}
  };

  on("file:preprocessor", webpackPreprocessor(options));

  on('before:browser:launch', (browser, launchOptions) => {
    launchOptions.args.push('--proxy-bypass-list=<-loopback>')
    
    return launchOptions
  });
}
