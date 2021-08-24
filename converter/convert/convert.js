function convert(src) {
  for (let p of lst) {
    let key = p.from;
    let val = p.to;
    src = src.replace(new RegExp(key, "g"), val);
  }
  src = "include <stdio.h>\n\n" + src;
  return src;
}