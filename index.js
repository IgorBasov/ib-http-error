'use strict';

const CustomError = require('./lib/custom-error.js');
const http = require('http');

module.exports = class HTTPError extends CustomError {
  constructor (status, message) {
    if (typeof(status) !== 'number') {
      message = status;
      status = 500;
    } else if (typeof(message) === 'undefined') {
      message = http.STATUS_CODES[status];
    }
    message = message || '';

    super(message);

    this.message = message;
    this.status = status;
  }
  toString () {
    return this.name + ': ' + this.status + ' ' + this.message;
  }
};