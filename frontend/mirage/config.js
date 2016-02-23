export default function() {
  this.namespace = 'api'
  this.timing    = 400

  this.get('/v1/topics', ({ topic }, { queryParams }) => {
    let identifier = queryParams['filter[identifier]']

    if (identifier) {
      return topic.where({ identifier })
    }

    return topic.all()
  })
  this.get('/v1/topics/:id')

  this.get('/v1/threads', ({ thread }, { queryParams }) => {
    let topic = queryParams['filter[topic]']

    if (topic) {
      return thread.where({ topicId: topic })
    }

    return thread.all()
  })
  this.get('/v1/threads/:id')

  this.get  ('/v1/comments')
  this.post ('/v1/comments')
  this.get  ('/v1/comments/:id')
  this.patch('/v1/comments/:id')
}
