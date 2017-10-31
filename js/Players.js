function Players(x,y){
  this.x = x;
  this.y = y;
  this.life = 3;
  //this.direction_x;
  //this.direction_y;
};
Players.prototype.addMap = function(x,y, content){
  myMaps.mapItems[x][y] = content;
};
Players.prototype.position = function(x,y, content){
  myMaps.mapItems[x][y] = content;
};

Players.prototype.backPosition = function(x,y, content){
  myMaps.mapItems[x][y] = content;
};

Players.prototype.moveUp = function(x,y,content){
  this.x--;
  myMaps.mapItems[x][y] = content;
  console.log(myMaps.mapItems);
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
