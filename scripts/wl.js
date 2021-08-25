class WL {
  constructor(arr) {
    this.wl_id = arr[0].toString();
    this.author = arr[1].toString();
    this.content = arr[2].toString();
  }

  toElement(lnk) {
    let row = $("<tr>");

    let id = $("<td>");
    id.append(
      $("<a>", {
        href: `${lnk}`,
        text: this.wl_id
      })
    );


    row.append(id);
    row.append($("<td>").text(this.author));
    row.append($("<td>").text(this.content));
    return row;
  }
}