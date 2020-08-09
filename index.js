var os = require('os');
var fs = require('fs'),
  exec = require('child_process').exec;

function open(html) {
  var tmpPath = os.tmpdir() + '/node-open-webpage-' + new Date().getTime() + '.html';
  fs.writeFileSync(tmpPath, html);

  if (process.platform === 'win32')
    exec('start ' + tmpPath);

  else
    // MacOS
    exec('open ' + tmpPath);
}

module.exports = open;
