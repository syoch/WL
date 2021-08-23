const fs = require("fs");
const { convert } = require("./convert");
const { reverse } = require("./reverse");

if (process.argv[2] === "reverse") {
  let wl = reverse(fs.readFileSync("input/cpp.cpp").toString());
  fs.writeFileSync("output/wl.txt", wl);
} else {
  let cpp = convert(fs.readFileSync("input/wl.txt").toString());
  fs.writeFileSync("output/cpp.cpp", cpp);
}