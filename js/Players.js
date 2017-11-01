function Players(x, y) {
  this.x = x;
  this.y = y;
  this.vx = 9;
  this.vy = 8;
  this.life = 3;
  this.radius = 20;
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
Players.prototype.moveUp = function(x, y, content) {
  this.x--;
  myBoards.mapItems[x][y] = content;
};
Players.prototype.moveDown = function(x, y, content) {
  this.x++;
  myBoards.mapItems[x][y] = content;
};
Players.prototype.moveLeft = function(x, y, content) {
  this.y--;
  myBoards.mapItems[x][y] = content;
};
Players.prototype.moveRight = function(x, y, content) {
  this.y++;
  myBoards.mapItems[x][y] = content;
};



Players.prototype.lifeCheck = function() {

};
Players.prototype.paintPlayer = function(ctx) {
      ctx.beginPath();
      ctx.arc(this.x+40, this.y+45, this.radius, 0, Math.PI * 2, true);
      ctx.closePath();
      ctx.fillStyle = this.color;
      ctx.fill();
  };
Players.prototype.updatePlayer = function (ctx) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    myBoards.start(ctx);
    myPlayers1.paintPlayer(ctx);

    this.x += this.vx;
    this.y += this.vy;
    myPlayers1.paintPlayer(ctx);

    if (this.y + this.vy > canvas.height || this.y + this.vy < 0) {
    this.vy *= -1;
    }
    if (this.x + this.vx > canvas.width || this.x + this.vx < 0) {
    this.vx *= -1;
    }
  };
