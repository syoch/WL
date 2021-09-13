async function fetchDatabase() {
  let _images = await get("../datas/images.txt");
  let images = _images.split("\n");

  let database = await getJSON("../datas/database.json");

  let dendou = await getJSON("../datas/dendou.json");

  window.dict = database.map(x => {
    let obj = new WL();
    obj.wl_id = x[0];
    obj.author = x[1];
    obj.content = x[2];

    obj.is_dendou = Object.keys(dendou).includes(obj.wl_id);
    obj.dendou_image = dendou[obj.wl_id];
    obj.normal_image = images[obj.wl_id - 1];

    return obj;
  })
}