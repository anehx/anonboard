import Route from 'ember-route'

export default Route.extend({
  async model({ identifier }) {
    let [ topic ] = await this.store.queryRecord('topic', { filter: { identifier }, include: 'threads' })

    return topic
  }
})
