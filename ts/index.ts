import * as plugins from './smarterror.plugins'

export class SmartError extends Error {
  name = 'SmartError'
  constructor (errorMessageArg: string) {
    super(errorMessageArg)
  }
}
