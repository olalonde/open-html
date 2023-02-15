var open = require("../");

async function main() {
  // await open("<html><head></head><body>just testing</body></html>");

  await open("<html><head></head><body>just testing</body></html>", {
    wait: true,
    newInstance: true,
  });
}

main().catch(console.error);
