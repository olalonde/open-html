const { promisify } = require("util");
const { writeFile } = require("fs");
const { file } = require("tmp-promise");
const open = require("open");

const writeFileAsync = promisify(writeFile);

async function openHtml(html, opts = {}) {
  const { fd, path, cleanup } = await file({
    prefix: "openhtml-",
    postfix: ".html",
  });
  await writeFileAsync(fd, html);
  await open(path);
  // We don't remove the file because sometimes it gets removed too quickly and the browser
  // hasn't had time to load the page. It will be removed by OS eventually anyways.
  // await cleanup();
}

module.exports = openHtml;
