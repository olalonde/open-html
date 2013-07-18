var fs = require('fs'),
  exec = require('child_process').exec;

function open(html) {
  var tmpPath = '/tmp/node-open-webpage-' + new Date().getTime() + '.html';
  fs.writeFileSync(tmpPath, html);
  exec('open ' + tmpPath);
}

module.exports = open;
