class tbCell extends thorium.components {
  constructor(
    text = null,
    row = 1,
    coll = 1,
    theme = "whiteFlatBlue",
    option = "default"
  ) {
    super({
      type: "tbCell",
      prop: {
        class: "tbCell",
        text: `<p>${text}</p>`,
        theme: theme,
        option: option,
        style: `grid-column:${coll};grid-row:${row};`
      }
    });
  }
}
