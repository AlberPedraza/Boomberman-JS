function Players(x,y){
  this.x = x;
  this.y = y;
  this.life = 3;
  //this.direction_x;
  //this.direction_y;
};
Players.prototype.addPlayerMap = function(x,y, content){
    myMaps.mapItems[x][y] = content;
};
Players.prototype.clearPlayerPos = function(x,y, content){
  myMaps.mapItems[x][y] = content;
};
//funciones de movimimento
Players.prototype.moveUp = function(x,y,content){
  this.x--;
  myMaps.mapItems[x][y] = content;
};
Players.prototype.moveDown = function(x,y,content){
  this.x++;
  myMaps.mapItems[x][y] = content;
};
Players.prototype.moveLeft = function(x,y,content){
  this.y--;
  myMaps.mapItems[x][y] = content;
};
Players.prototype.moveRight = function(x,y,content){
  this.y++;
  myMaps.mapItems[x][y] = content;
};

/////////
Players.prototype.movedClear = function(x,y,content){
  myMaps.mapItems[x][y] = content;
};
Players.prototype.lifeCheck = function(){

};
