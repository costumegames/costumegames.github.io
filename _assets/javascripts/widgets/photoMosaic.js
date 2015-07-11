var grid = new Grid({
  element: '#photoMosaic',
  columns: $('#photoMosaic').data('columns'),
  margin: $('#photoMosaic').data('margin')
});
var bottom = 0;

window.addEventListener('load', function() {
    for (var i = 0; i < grid.items.length; i++) {
        if (Math.random() > 0.51) {
          var ratio = grid.items[i].orientation;
          // half-way between 1:2 and 2:3
          if (ratio < 0.58) {
            grid.items[i].spanX = 1;
            grid.items[i].spanY = 2;
          } 
          // half-way between 2:3 and 1:1
          else if (ratio < 0.83) {
            grid.items[i].spanX = 2;
            grid.items[i].spanY = 3;
          } 
          // half-way between 1:1 and 3:2
          else if (ratio < 1.25) {
            grid.items[i].spanX = 2;
            grid.items[i].spanY = 2;
          } 
          // half-way between 3:2 and 16:9
          else if (ratio < 1.64) {
            grid.items[i].spanX = 3;
            grid.items[i].spanY = 2;
          } 
          // 16:9 and up
          else {
            grid.items[i].spanX = 2;
            grid.items[i].spanY = 1;
          }
        }
    }
    $('#photoMosaic').addClass('in');
    grid.draw();
    
    $('#photoMosaic>.grid-item').each(function () {
        var el = $(this);
        var itembottom = el.position().top + el.outerHeight();
        if (itembottom > bottom) {
            bottom = itembottom;
        }
    });
    $('#photoMosaic').height(bottom + $('#photoMosaic').data('margin'));
}, false);