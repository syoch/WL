class WL {
  constructor() {
    this.wl_id = "";
    this.author = "";
    this.content = "";

    this.is_dendou = false;
    this.dendou_image = "";
    this.normal_image = "";
  }

  toElement(lnk, author_handler = () => { }) {
    let row = $("<tr>");

    let id = $("<td>");
    id.append(
      $("<a>", {
        href: `${lnk}`,
        text: this.wl_id
      })
    );
    
    let author = $("<td>");
    author.append(
      $("<a>", {
        href: `javascript:`,
        text: this.author
      })
    );
    author.click(()=>{author_handler(this)});

    row.append(id);
    row.append(author);
    row.append($("<td>").text(this.content));
    return row;
  }
}