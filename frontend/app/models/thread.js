import Model from 'ember-data/model'
import attr  from 'ember-data/attr'

import {
  hasMany,
  belongsTo
} from 'ember-data/relationships'

export default Model.extend({
  user:     belongsTo('user'),
  topic:    belongsTo('topic'),
  title:    attr('string'),
  content:  attr('string'),
  created:  attr('moment'),
  comments: hasMany('comment')
})
