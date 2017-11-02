function Bombs(){
  this.x;
  this.y;
  this.cx;
  this.cy;
  this.c_area = 91.75;
  this.radius = 30;
  this.radius_b = 20;
  this.color = 'red';
  this.range = 1;
  this.damage;
};
//recoge posición de la bomba y rango de explosión
Bombs.prototype.damageBoom = function(x,y,range,content){
  x = this.x;
  y = this.y;
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
Bombs.prototype.setBombs = function(x,y){
  console.log("bomba x/y: " + x,y);
//añade la bomba a la array 2d
  this.x = x;
  this.y = y;
  //marca con cero la posicion de la bomba en la array 2d
  myBoards.mapItems[x][y] = 0;
  //guardamos el objeto para acceder
  var that=this;
  setTimeout(function(){
    that.damageBoom(x,y,1,"o");
        console.log("log setBoom --damage: " + myBoards.mapItems);
      setTimeout(function(){
        that.clearBomb(x,y,1,"-");
        myBombs.pop();
          console.log("log setBoom --clear: " + myBoards.mapItems);
      },200);
  }, 2000);

};

Bombs.prototype.paintBombs = function() {
  //console.log("position cx/cy: "+ cx, cy);
  ctx.beginPath();
  //pinto bomba
  ctx.arc(this.y*this.c_area+40, this.x*this.c_area+40, this.radius, 0, Math.PI * 2, true);
  ctx.closePath();
  ctx.fillStyle = this.color;
  ctx.fill();
};

Bombs.prototype.checkBombs = function(){
var checkBombs = myBoards.mapItems;
var that = this;
var i,j;
  for (i= 0; i <= 7; i++ ){
    for (j = 0; j <= 7; j++ ){
      if(checkBombs[i][j] == "0"){
              this.cx = i * this.c_area;
              this.cy = j * this.c_area;

            //console.log("cajas--> "+i,j);
      };
    };
  };
};
Bombs.prototype.paintBurned = function(cx,cy) {
  //console.log("position cx/cy: "+ cx, cy);
  ctx.beginPath();
  //pinto bomba
ctx.arc(this.y*this.c_area+40, this.x*this.c_area+40, this.radius_b, 0, Math.PI * 2, true);
  ctx.closePath();
  ctx.fillStyle = this.color;
  ctx.fill();
};
