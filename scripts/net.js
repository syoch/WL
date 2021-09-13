function getJSON(url) {
  return new Promise((resolve, reject) => {
    $.getJSON(url + "?" + getUnique()).done(resolve).fail(reject);
  })
}

function get(url) {
  return new Promise((resolve, reject) => {
    $.get(url + "?" + getUnique()).done(resolve).fail(reject);
  })
}