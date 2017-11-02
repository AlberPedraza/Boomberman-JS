function Boards(x,y){
  this.canvas = document.getElementById("map");
  this.frames= 0;
  this.mapItems = [
    ["x", "-", "x", "-", "x", "-", "x", "-"],
    ["-", "x", "x", "-", "-", "x", "x", "-"],
    ["-", "x", "-", "x", "-", "x", "-", "x"],
    ["-", "-", "-", "-", "-", "-", "x", "-"],
    ["x", "-", "x", "-", "x", "-", "x", "x"],
    ["-", "-", "-", "x", "-", "-", "x", "-"],
    ["-", "x", "-", "x", "x", "-", "x", "x"],
    ["x", "x", "-", "-", "x", "-", "-", "x"],
  ];
  // ["x", "x", "x", "x", "x", "x", "x", "x"],
  // ["x", "x", "x", "x", "x", "x", "x", "x"],
  // ["x", "x", "x", "x", "x", "x", "x", "x"],
  // ["x", "x", "x", "x", "x", "x", "x", "x"],
  // ["x", "x", "x", "x", "x", "x", "x", "x"],
  // ["x", "x", "x", "x", "x", "x", "x", "x"],
  // ["x", "x", "x", "x", "x", "x", "x", "x"],
  // ["x", "x", "x", "x", "x", "x", "x", "x"],

};
Boards.prototype.start = function (ctx){
  this.canvas.width = 720;
  this.canvas.height = 720;
        for (var i = 0; i <= 7; i++) {
          for (var j = 0; j <= 7; j++) {
            ctx.fillStyle = 'rgb(' + Math.floor(255 - 39 * i) + ', ' +
              Math.floor(255 - 39 * j) + ', 100)';
            //ctx.fillStyle = 'rgb(173,255,47)';
            ctx.strokeStyle = 'rgba(255, 255, 255, 1)';
            ctx.fillRect(j * 90, i * 90, 90, 90);
          }
        };
  //Generamos un setInterval para actualizar en todo momento el juego
  //this.interval = setInterval(updateBoard, 20);
};

Boards.prototype.clear = function () {
  this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
};
Boards.prototype.stop = function () {
  clearInterval(this.interval);
};
