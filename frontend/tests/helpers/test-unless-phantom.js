import { skip } from 'qunit'
import { test } from 'ember-qunit'

export default function testUnlessPhantom(desc, fn) {
  if (/phantom/i.test(navigator.userAgent)) {
    return skip(desc, fn)
  }

  return test(desc, fn)
}
