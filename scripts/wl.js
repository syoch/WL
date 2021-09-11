class WL {
  constructor() {
    this.wl_id = "";
    this.author = "";
    this.content = "";

    this.is_dendou = false;
    this.dendou_image = "";
    this.normal_image = "";
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