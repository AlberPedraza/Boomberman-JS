function Bombs(){
  this.Bomb_x;
  this.Bomb_y;
  this.range = 1;
  this.damage;
};

//recoge posición de la bomba y rango de explosión
Bombs.prototype.damageBoom = function(x,y,range,content){
  x = this.Bomb_x;
  y = this.Bomb_y;
//marca con ó el radio de explosión
  for(a = 1; a <= range; a++){
    myBoards.mapItems[x][y - range] = content;
    myBoards.mapItems[x][y + range] = content;
    myBoards.mapItems[x + range][y] = content;
    myBoards.mapItems[x - range][y] = content;
  }
  console.log("log damageBoom: "+myBoards.mapItems);
  //this.clearBomb(x,y);
};
//limpiar bomba
Bombs.prototype.clearBomb = function(x,y,range,content){
  //marca con cero la posicion de la bomba
  myBoards.mapItems[x][y] = content;
  var that=this;
  setTimeout(function(){that.damageBoom(x,y,range,content);}, 200);
};
//pone bomba en posición y activa la explosión con setInterval de damageBoom
Bombs.prototype.setBomb = function(x,y){
  this.Bomb_x = x;
  this.Bomb_y = y;
  //marca con cero la posicion de la bomba
  myBoards.mapItems[x][y] = 0;
  console.log(this);
  //guardamos el objeto para acceder
  var that=this;
  setTimeout(function(){
    that.damageBoom(x,y,1,"o");
              console.log("log setBoom --damage: " + myBoards.mapItems);
      setTimeout(function(){
        that.clearBomb(x,y,1,"-");
          console.log("log setBoom --clear: " + myBoards.mapItems);
      },200);
  }, 2000);

};
