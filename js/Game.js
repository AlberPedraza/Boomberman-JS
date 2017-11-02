function Game(){
  //this.board = new board(0,300);
  //this.player1 = new Paddle(0,300);
  //this.player2 = new Paddle(1000,300);
  //this.ball = new Ball(500,500);

};
Game.prototype.update = function(){
  //this.checkCollisions();
   ctx.clearRect(0, 0, canvas.width, canvas.height);
   myBoards.start(ctx);
   myBoxes.setBoxes(this.cy, this.cx);
   myBombs.paintBombs(this.x, this.y);
   myPlayers1.paintPlayer(ctx);

};
Game.prototype.checkCollisions = function(){

};
