function Players(x, y, cx, cy, c_area) {
  this.x = x;
  this.y = y;
  this.cx = cx;
  this.cy = cy;
  this.c_area = c_area;
  this.vx = 5;
  this.vy = 5;
  this.life = 0;
  this.radius = 30;
  this.color = 'black';
  //this.direction_x;
  //this.direction_y;
};

Players.prototype.addPlayerMap = function(x, y, content) {
  myBoards.mapItems[x][y] = content;
};
Players.prototype.clearPlayerPos = function(x, y, content) {
  myBoards.mapItems[x][y] = content;
};

//funciones de movimimento
//movimiento en Matriz
Players.prototype.moveUp = function(x, y, content) {
  this.x--;
  myBoards.mapItems[x][y] = content;
  ///movimiento en canvas
  this.cy -= this.c_area;
    this.updatePlayerCanvas(this.cx, this.cy);
  //cierra control de inserccion en matriz y movimiento en canvas
  console.log("moveUp: x,y: " + x, y);
};
Players.prototype.moveDown = function(x, y, content) {
  this.x++;
  myBoards.mapItems[x][y] = content;
  ///movimiento en canvas
  this.cy += this.c_area;
    this.updatePlayerCanvas(this.cx, this.cy);
  console.log("moveDown: x,y: " + x, y);
};
/////////////////////////////////////////////////////////////////
Players.prototype.moveLeft = function(x, y, content) {
  this.y--;
  myBoards.mapItems[x][y] = content;
  ///movimiento en canvas
  this.cx -= this.c_area;
    this.updatePlayerCanvas(this.cx, this.cy);
};
Players.prototype.moveRight = function(x, y, content) {
  this.y++;
  myBoards.mapItems[x][y] = content;
  ///movimiento en canvas
  this.cx += this.c_area;
    this.updatePlayerCanvas(this.cx, this.cy);
};

Players.prototype.updatePlayerCanvas = function(cx, cy) {
  /*
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    myBoards.start(ctx);
    myPlayers1.paintPlayer(ctx);
*/
  console.log("updatePlayerCanvas: " + cx, cy, ctx);
  //actualizo jugador
  //this.cx += this.vx;
  //this.cy += this.vy;

  /*
      if (this.y + this.vy > canvas.height || this.y + this.vy < 0) {
      this.vy *= -1;
      }
      if (this.x + this.vx > canvas.width || this.x + this.vx < 0) {
      this.vx *= -1;
      }
  */
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  myBoards.start(ctx);
  myPlayers1.paintPlayer(ctx);

};


Players.prototype.lifeCheck = function() {

};
Players.prototype.paintPlayer = function(ctx) {
  console.log("cx,cy, c_area: ", this.cx, this.cy, this.c_area);
  ctx.beginPath();
  //creo jugador
  ctx.arc(this.cx + 50, this.cy + 50, this.radius, 0, Math.PI * 2, true);
  ctx.closePath();
  ctx.fillStyle = this.color;
  ctx.fill();
};

Players.prototype.stopPlayer = function(ctx) {
  myBoards.start(ctx);
  myPlayers1.paintPlayer(ctx);
};
