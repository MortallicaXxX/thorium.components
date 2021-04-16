thorium.onReady = function (self) {
  self.conf = {
    id: "app",
    parent: document.body
  };

  self.GUI([
    {
      type: "div",
      prop: { id: "app" },
      childrens: [new button("default"), new button("shaded", null, "shaded")]
    }
  ]);

  self.gui.buildIn(document.body).then(function () {
    self.initialise();
  });
};
