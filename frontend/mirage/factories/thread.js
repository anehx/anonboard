import { Factory, faker } from 'ember-cli-mirage'

export default Factory.extend({
  title() {
    return faker.lorem.sentence()
  },

  content() {
    return faker.lorem.paragraph()
  },

  created() {
    return faker.date.past()
  }
})
