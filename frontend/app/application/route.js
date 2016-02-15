import Route from 'ember-route'

export default Route.extend({
  beforeModel() {
    return this.store.findAll('topic')
  },

  setupController(controller, model) {
    this._super(...arguments)

    controller.set('topics', this.store.peekAll('topic'))
  }
})
