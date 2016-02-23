import Route         from 'ember-route'
import injectService from 'ember-service/inject'

export default Route.extend({
  setupController(controller, model) {
    this._super(...arguments)

    controller.set('navigation', injectService())
  }
})
