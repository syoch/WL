class WL {
  constructor(arr) {
    this.wl_id = arr[0].toString();
    this.author = arr[1].toString();
    this.content = arr[2].toString();
  }

  toElement() {
    let row = $("<tr>");
    row.append($("<td>").text(this.wl_id));
    row.append($("<td>").text(this.author));
    row.append($("<td>").text(this.content));
    return row;
  }
}