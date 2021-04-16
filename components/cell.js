class cell extends thorium.components {
  constructor(text = null, row = 1, coll = 1) {
    super({
      type: "cell",
      prop: {
        class: "cell",
        text: `<p>${text}</p>`,
        style: `grid-column:${coll};grid-row:${row};`
      }
    });
  }
}
