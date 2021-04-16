class table extends thorium.components {
  constructor(nbrColl = 1, nbrLine = 1, cell = []) {
    super({
      type: "div",
      prop: {
        class: "table",
        style: `display:grid;grid-columns:${nbrColl};grid-rows:${nbrLine};`
      }
    });
    if (cell.length > 0 && !this.childrens) this.childrens = [];
    for (var e of cell) {
      this.childrens.push(e);
    }
  }
}
