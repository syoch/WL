function reverse(src) {
  for (let p of lst.reverse()) {
    let key = p.from;
    let val = p.to;

    if (key.startsWith("絶対的に")) {
      src = src.replace(
        /(\d+)/g, "絶対的に$1"
      );
      continue;
    }
    src = p.is_regex
      ? src.replace(new RegExp(val, "g"), key)
      : src.split(val).join(key);

  }

  src = src.replace("#include <stdio.h>\n", "");
  return src;
}