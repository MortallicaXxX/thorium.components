class calendrier extends thorium.components {
  constructor() {
    let date = new Date(Date.now()).getDate(),
      month = new Date(Date.now()).getMonth(),
      year = new Date(Date.now()).getFullYear();

    let days = function(){
      var toReturn = [];
      for(var x = 1 ; x <= 5 ; x++){
        for(var y = 1 ; y <= 6 ; y++){
          toReturn.push(new tbCell(x*y,x,y))
        }
      }
      return toReturn;
    }

    super({
      type: "div",
      prop: { class: "calendrier"},
      childrens: [
        {
          type: "header-content",
          childrens: [
            {
              type: "btn-prev",
              prop: {
                name: "prev",
                text: icons.arrow1,
              }
            },
            {
              type: "date",
              prop: {
                style: "text-align:center;",
                text: `${date}-${month}-${year}`
              }
            },
            {
              type: "btn-next",
              prop: {
                name: "next",
                text: icons.arrow1,
                style: "grid-column:3;grid-row:1;height:1vw;width:1vw;"
              }
            }
          ]
        },
        new table(5, 6, days())
      ],
      proto: {}
    });
  }
}
