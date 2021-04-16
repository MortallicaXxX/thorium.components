thorium.onReady = function (self) {
  self.conf = {
    id: "app",
    parent: document.body
  };

  self.GUI([
    {
      type: "div",
      prop: { id: "app" },
      childrens: [
        new button("default"),
        new button("shaded", null, "shaded"),
        new button("bordered", null, "bordered")
      ]
    }
  ]);

  self.gui.buildIn(document.body).then(function () {
    self.initialise();
  });
};
