function Bombs(){
  this.Bomb_x;
  this.Bomb_y;
  this.range = 1;
  this.damage;
};

//recoge posición de la bomba y rango de explosión
Bombs.prototype.damageBoom = function(x,y,range){
  x = this.Bomb_x;
  y = this.Bomb_y;
//marca con ó el radio de explosión
  for(a = 1; a <= range; a++){
    myMaps.mapItems[x][y - range] = "o";
    myMaps.mapItems[x][y + range] = "o";
    myMaps.mapItems[x + range][y] = "o";
    myMaps.mapItems[x - range][y] = "o";
  }
  console.log(myMaps.mapItems);
  //this.clearBomb(x,y);
};

//pone bomba en posición y activa la explosión con setInterval de damageBoom
Bombs.prototype.setBomb = function(x,y){
  this.Bomb_x = x;
  this.Bomb_y = y;

  //marca con cero la posicion de la bomba
  myMaps.mapItems[x][y] = 0;
  console.log(this);

  //guardamos el objeto para acceder
  var that=this;
  setTimeout(function(){that.damageBoom(x,y,1);}, 3000);
};

//limpiar bomba
Bombs.prototype.clearBomb = function(x,y){

  //marca con cero la posicion de la bomba
  myMaps.mapItems[x][y] = "";
};
