thorium.onReady = function (self) {
  self.conf = {
    id: "app",
    parent: document.body
  };

  self.GUI([
    {
      type: "div",
      prop: { id: "app" },
      childrens: [new button("Hello World")]
    }
  ]);

  self.gui.buildIn(document.body).then(function () {
    self.initialise();
  });
};
