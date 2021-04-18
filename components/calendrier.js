class calendrier extends thorium.components {
  constructor() {
    var x = [new table(1, 1, [new tbCell("1")])];
    super({
      type: "div",
      prop: { class: "calendrier" },
      childrens: [
        {
          type: "div",
          childrens: [{ type: "div" }, { type: "div" }, { type: "div" }]
        },
        x
      ],
      proto: {}
    });
    console.log(this);
  }
}
