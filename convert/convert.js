const fs = require("fs");
const table = require("./table.json")


function convert(src) {
  for (let conf in table) {
    src = src.replace(new RegExp(conf, "g"), table[conf]);
  }
  src = fs.readFileSync(__dirname + "/header") + src;
  return src;
}

exports.convert = convert