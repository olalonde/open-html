# open-html

[![Node.js CI](https://github.com/olalonde/open-html/actions/workflows/node.js.yaml/badge.svg)](https://github.com/olalonde/open-html/actions/workflows/node.js.yaml)

Opens a HTML string in your default web browser. Useful to debug issues when web scraping. This package is meant to be used during development only.

## Install

```console
npm install open-html
```

## Usage

```javascript
const open = require("open-html");

open("<html><head></head><body>just testing</body></html>");

// opts are passed directly to open (see https://github.com/sindresorhus/open)
await open("<html><head></head><body>just testing</body></html>", {
  wait: true,
  newInstance: true,
});
```

Tested on Node >v10.
