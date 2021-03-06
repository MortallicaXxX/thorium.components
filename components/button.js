class button extends thorium.components {
  constructor(text = null, theme = "whiteFlatBlue", option = "default") {
    if (theme == null) theme = "whiteFlatBlue";
    if (option == null) option = "default";
    super({
      type: "button",
      prop: {
        class: "button",
        theme: theme,
        option: option,
        text: `<p>${text}</p>`
      },
      proto: {
        onClick: function () {
          console.log(this.e);
        }
      }
    });
  }
}
