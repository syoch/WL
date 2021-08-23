const fs = require("fs");
const { lst } = require("./table.json")


function convert(src) {
  for (let p of lst) {
    let key = p.from;
    let val = p.to;
    src = src.replace(new RegExp(key, "g"), val);
  }
  src = fs.readFileSync(__dirname + "/header") + src;
  return src;
}

exports.convert = convert