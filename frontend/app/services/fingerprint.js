import Service     from 'ember-service'
import Fingerprint from 'fingerprintjs2'
import computed    from 'ember-computed-decorators'

export default Service.extend({
  fingerprint: null,

  options: {},

  init() {
    this._super(...arguments)

    this.set('fingerprint', new Fingerprint2(this.get('options')))
  },

  @computed('fingerprint')
  hash(fingerprint) {
    return new Promise((resolve, reject) => {
      if (fingerprint) {
        fingerprint.get((hash, keys) => {
          resolve(hash)
        })
      }
      else {
        reject()
      }
    })
  }
})
