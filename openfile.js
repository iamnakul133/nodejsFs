//fs.open(path, flag, [model], callback)
//fs.openSync(path, flag, [model]) => synchronous

const fs = require("fs");
fs.open("./file.txt", "r", (err, data) => {
  console.log(`${data}`);
});
