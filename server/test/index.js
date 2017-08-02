import http from 'http'
import { assert } from 'chai'

import '../src/index.js'
import {describe, it} from 'mocha'

describe('Example Node Server', () => {
  it('should return 200', done => {
    http.get('http://127.0.0.1:3001/api', res => {
      assert.equal(200, res.statusCode)
      done()
    })
  })

  it('should have proper content-type', done => {
    http.get('http://127.0.0.1:3001/api', res => {
      assert.include(res.headers['content-type'], 'application/json')
      done()
    })
  })
})
