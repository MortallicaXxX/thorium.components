class table extends thorium.components {
  constructor(columns = 1, rows = 1, cell = []) {
    super({
      type: "div",
      prop: {
        class: "table",
        style: `display:grid;grid-columns:${columns};grid-rows:${rows};`
      }
    });
    if (cell.length > 0 && !this.childrens) this.childrens = [];
    for (var e of cell) {
      this.childrens.push(e);
    }
  }
}
