'use strict';
module.exports = class CustomError extends Error {
  constructor(msg) {
    super(msg);
    this.name = this.constructor.name;
    this.message = msg;
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, this.constructor);
    } else {
      this.stack = (new Error(msg)).stack;
    }
  }
};