import * as smarterror from '../ts/index';

import { expect, tap } from 'tapbundle';

let originalError: smarterror.SmartError;
tap.test('should create a valid error', async () => {
  originalError = new smarterror.SmartError('wow');
  expect(originalError).to.be.instanceof(Error);
  console.log(originalError.cleanFullStack);
});

tap.test('should accept another error as cause', async () => {
  let anotherError = new smarterror.SmartError('this is another Error', originalError);
  console.log(anotherError.cleanFullStack);
})

tap.start();
