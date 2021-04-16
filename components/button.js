class button extends thorium.components {
  constructor(text = null, theme = "whiteFlatBlue", option = "default") {
    if (theme == null) theme = "whiteFlatBlue";
    if (theme == null) option = "default";
    super({
      type: "button",
      prop: {
        class: "button",
        theme: `${theme}`,
        option: `${option}`,
        text: `<p>${text}</p>`
      }
    });
  }
}
