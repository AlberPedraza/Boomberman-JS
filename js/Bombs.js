function Bombs(){
  this.x;
  this.y;
  this.cx= 350;
  this.cy = 350;
  this.c_area = 91.75;
  this.radius = 30;
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
          console.log("log setBoom --clear: " + myBoards.mapItems);
      },200);
  }, 2000);

//recorre la array 2d buscando la bomba
  var bombs = myBoards.mapItems;
  var that = this;
  var i,j;
    for (i= 0; i <= 7; i++ ){
      for (j = 0; j <= 7; j++ ){
        if(bombs[i][j] == 0){
                this.cx = i * this.c_area;
                this.cy = j * this.c_area;
                myBombs.paintBombs(this.x,this.y);
        };
      };
    };
};


Bombs.prototype.paintBombs = function(cx,cy) {
  //console.log("position cx/cy: "+ cx, cy);
  ctx.beginPath();
  //pinto bomba
  ctx.fillRect(cx, cy, this.square, this.square);
  ctx.closePath();
  ctx.fillStyle = this.color;
  ctx.fill();
};
