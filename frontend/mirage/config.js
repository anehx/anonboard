export default function() {
  this.namespace = 'api'
  this.timing    = 400

  this.get  ('/v1/topics', ({ topic }, { queryParams }) => topic.where(queryParams))
  this.post ('/v1/topics')
  this.get  ('/v1/topics/:id')
  this.patch('/v1/topics/:id')
  this.del  ('/v1/topics/:id')
}
