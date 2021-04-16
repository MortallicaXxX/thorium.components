class cell extends thorium.components {
  constructor(text = null, coll = 1, row = 1) {
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
