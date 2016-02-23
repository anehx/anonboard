import Route from 'ember-route'

export default Route.extend({
  async model({ id }) {
    let thread = await this.store.findRecord('thread', id, { include: 'topic,comments' })

    return thread
  },

  actions: {
    addComment() {
      let content = this.get('controller.comment')

      let comment = this.store.createRecord('comment', {
        thread: this.get('currentModel'),
        content
      })

      comment.save()

      this.set('controller.comment', undefined)
    }
  }
})
