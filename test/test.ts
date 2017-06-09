import * as smarterror from '../dist/index'

import { expect, tap } from 'tapbundle'

tap.test('should create a valid error', async () => {
  let myError = new smarterror.SmartError('wow')
  expect(myError).to.be.instanceof(Error)
  console.log(myError.stack)
})

tap.start()
