import Route from 'ember-route'

export default Route.extend({
  async model({ name }) {
    let [ topic ] = await this.store.queryRecord('topic', { filter: { name } })

    return topic
  }
})
