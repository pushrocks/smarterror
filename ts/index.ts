import * as plugins from './smarterror.plugins';

import { BaseError, fullStack } from 'make-error-cause';

export const seperatorText = `\n\nThe following exception was the direct cause of the above exception:\n\n`;

export class SmartError extends BaseError {
  name = 'SmartError';
  constructor(errorMessageArg: string, errorCause?) {
    super(errorMessageArg, errorCause);
  }

  get fullStack() {
    return fullStack(this);
  }

  get cleanFullStack() {
    let fullCleanStack = plugins.cleanStack(this.stack);

    let errorPointer = this as BaseError;

    while (errorPointer.cause) {
      fullCleanStack += seperatorText;
      if (errorPointer.cause.stack) {
        fullCleanStack += plugins.cleanStack(errorPointer.cause.stack);
      } else {
        fullCleanStack += errorPointer.cause.message;
      }
      errorPointer = errorPointer.cause as BaseError;
    }
    return fullCleanStack;
  }
}
