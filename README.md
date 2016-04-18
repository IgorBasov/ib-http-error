# HTTP Errors for Node.js

Minimalist module that helps to handle HTTP errors in your Node.js apps.

`npm install ib-http-error`

## Example

```javascript
const HTTPError = require('./index.js');
const express = require('express');
const app = express();

app.get('/http-error', function(req, req, next) {
  return next(new HTTPError(500, 'Server error\n'));
});

app.use(function(err, req, res, next) {
  res
    .status(err.status)
    .end(err.message);
});

app.listen(3000);
```

```shell
$ curl -i http://localhost:3000/http-error

HTTP/1.1 500 Internal Server Error
X-Powered-By: Express
Date: Mon, 18 Apr 2016 11:30:09 GMT
Connection: keep-alive
Content-Length: 13

Server error
```

## Features

- `HTTPError` is inherited from `Error` => instances of `HTTPError` are throwable.
- Have full stacktrace.
- Support of auto filling of error messages by its code (using `require('http').STATUS_CODES`).

## Usage

#### `HTTPError(status, message)`
Creates an error with the status and message.

#### `HTTPError(status)`
Creates an error with the status and corresponding message from `http.STATUS_CODES`.

#### `HTTPError(message)`
Creates an error with the message. Status code will be set to `500`.