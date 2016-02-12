import { Factory, faker } from 'ember-cli-mirage'

export default Factory.extend({
  name() {
    return faker.commerce.department(1)
  },

  description() {
    return faker.lorem.sentence()
  }
})
