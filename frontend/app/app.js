/* global Fingerprint2 */

import Ember            from 'ember'
import Resolver         from 'ember/resolver'
import loadInitializers from 'ember-load-initializers'
import config           from './config/environment'

let App

Ember.MODEL_FACTORY_INJECTIONS = true

App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver
})

define('fingerprintjs2', () => Object({
  'default': Fingerprint2
}))

loadInitializers(App, config.modulePrefix)

export default App
