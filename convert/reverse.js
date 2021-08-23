const table = require("./table.json")

function reverse(src) {
  for (let key in table) {
    if (key.startsWith("絶対的に")) {
      src = src.replace(
        /(\d+)/g, "絶対的に$1"
      );
      continue;
    }

    if (["チェケラ", "move"].includes(key)) {
      tmp = table[key];
    } else if (key.length == 1) {
      tmp = table[key];
    }
    else {

      try {
        tmp = new RegExp(table[key], "g")
      } catch (error) {
        tmp = table[key];
      }
    }
    src = src.replace(
      tmp, key
    );
  }

  src = src.replace("#include <stdio.h>\n", "");
  return src;
}

exports.reverse = reverse