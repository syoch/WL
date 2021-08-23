const table = require("./table.json")

function reverse(src) {
  for (let key in table) {
    val = table[key];

    if (key.startsWith("絶対的に")) {
      src = src.replace(
        /(\d+)/g, "絶対的に$1"
      );
      continue;
    }

    if (["チェケラ", "move"].includes(key)) {
      tmp = val;
    } else if (key.length == 1) {
      tmp = val;
    }
    else {

      try {
        tmp = new RegExp(val, "g")
      } catch (error) {
        tmp = val;
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