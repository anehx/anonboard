import Router from 'ember-router'
import config from './config/environment'

const AppRouter = Router.extend({
  location: config.locationType
})

AppRouter.map(function() {
  this.route('topic', { path: '/t/:identifier' }, function() {
    this.route('thread', { path: '/:id' })
  })
})

export default AppRouter
