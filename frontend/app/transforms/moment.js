import Transform from 'ember-data/transform'
import moment    from 'moment'

export default Transform.extend({
  deserialize(serialized) {
    return serialized ? moment(serialized) : null
  },

  serialize(deserialized) {
    return deserialized && deserialized.isValid() ? deserialized.toISOString() : null
  }
})
