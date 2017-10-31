function Players(x, y) {
  this.x = x;
  this.y = y;
  this.life = 3;
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

  var new_player = {
    x: 39,
    y: 39,
    vx: 5,
    vy: 2,
    radius: 25,
    color: 'black',
    draw: function(ctx) {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
      ctx.closePath();
      ctx.fillStyle = this.color;
      ctx.fill();
    }
  };

  function update(ctx) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    new_player.x += new_player.vx;
    new_player.y += new_player.vy;
  };


  new_player.draw(ctx);
};//cierra paintPlayer
