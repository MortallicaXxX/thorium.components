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
          new cell("[1,1]", 1, 1),
          new cell("[2,1]", 2, 1),
          new cell("[3,1]", 3, 1),
          new cell("[4,1]", 4, 1),
          new cell("[5,1]", 5, 1),

          new cell("[1,2]", 1, 2),
          new cell("[2/4,2]", "2/4", 2),
          new cell("[3,2]", 5, 2),
          new cell("[1/5,3/6]", "1/5", "3/6")
        ])
      ]
    }
  ]);

  self.gui.buildIn(document.body).then(function () {
    self.initialise();
  });
};
