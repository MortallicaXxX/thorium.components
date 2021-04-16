class button extends thorium.components {
  constructor(text = null) {
    super({
      type: "button",
      prop: {
        class: "button",
        text: `<p>${text}</p>`
      }
    });
  }
}
