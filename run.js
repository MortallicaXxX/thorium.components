thorium.onReady = function (self) {
  self.conf = {
    id: "app",
    parent: document.body
  };

  /*self.GUI([
    {
      type: "div",
      prop: { id: "app" },
      childrens: [
        new button("default"),
        new button("shaded", null, "shaded"),
        new button("bordered", null, "bordered")
      ]
    }
  ]);*/

  self.GUI([
    {
      type: "div",
      prop: { id: "app" },
      childrens: [
        new table(5, 6, [
          new tbCell("[1,1]", 1, 1),
          new tbCell("[1,2]", 1, 2),
          new tbCell("[1,3]", 1, 3),
          new tbCell("[1,4]", 1, 4),
          new tbCell("[1,5]", 1, 5),

          new tbCell("[2,1]", 2, 1),
          new tbCell("[2,2/5]", 2, "2/5"),
          new tbCell("[2,5]", 2, 5),
          new tbCell("[3,1/5]", "3", "1/5")
        ])
      ]
    }
  ]);

  self.gui.buildIn(document.body).then(function () {
    self.initialise();
  });
};
