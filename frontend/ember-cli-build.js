/* global require, module */

"use strict"

let EmberApp = require('ember-cli/lib/broccoli/ember-app')

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    babel: {
      includePolyfill: true,
      optional: [ 'es7.decorators', 'es7.asyncFunctions' ],
    },
    tests: false,
    sassOptions: {
      extension: 'sass'
    }
  })

  return app.toTree()
}
