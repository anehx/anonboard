import Service       from 'ember-service'
import injectService from 'ember-service/inject'

export default Service.extend({
  store: injectService(),

  init() {
    this._super(...arguments)

    this.set('entries', this.get('store').findAll('topic'))
  }
})
