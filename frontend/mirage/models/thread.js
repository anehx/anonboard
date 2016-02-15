import {
  Model,
  belongsTo,
  hasMany
} from 'ember-cli-mirage'

export default Model.extend({
  topic:    belongsTo('topic'),
  user:     belongsTo('user'),
  comments: hasMany('comment')
})
