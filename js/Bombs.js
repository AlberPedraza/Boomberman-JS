function Bombs(){
  this.x;
  this.y;
  this.cx;
  this.cy;
  this.c_area = 91.75;
  this.radius = 30;
  this.radius_b = 20;
  this.c_area_b = 120.75;
  this.color = 'red';
  this.color_b = "orange";
  this.range = 1;
  this.damage;
  this.imgScale = this.c_area/this.c_area;
  this.img = new Image();
  this.img2 = new Image();
  this.img.src = './img/bomb.png';
  this.img2.src = './img/explosion.png';
  this.img.addEventListener('load', this.paintBombs.bind(this));
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
};

//limpiar bomba
Bombs.prototype.clearBomb = function(x,y,range,content){
  //marca con cero la posicion de la bomba
  myBoards.mapItems[x][y] = content;
  var that=this;
  setTimeout(function(){
    that.damageBoom(x,y,range,content);
    if(myBoards.mapItems[x][y]=="w"){
      alert("Estás eliminado");
    }

  }, 200);
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
        that.paintBurned();
        that.clearBomb(x,y,1,"-");
        //empuja la ultima bomba
        myBombs.pop();

        console.log("log setBoom --clear: " + myBoards.mapItems);
      },200);
  }, 2000);
};

Bombs.prototype.paintBombs = function() {
  //console.log("position cx/cy: "+ cx, cy);
/*
  ctx.beginPath();
  //pinto bomba
  ctx.arc(this.y*this.c_area+40, this.x*this.c_area+40, this.radius, 0, Math.PI * 2, true);
  ctx.closePath();
  ctx.fillStyle = this.color;
  ctx.fill();
*/



  ctx.drawImage(this.img, this.y*this.c_area+12, this.x*this.c_area+12,80*this.imgScale,80);

};

Bombs.prototype.paintBurned = function() {
  //console.log("position cx/cy: "+ cx, cy);
/*
  ctx.beginPath();
  //pinto ráfaga de bomba
  //ctx.arc(this.y*this.c_area+45, this.x*this.c_area+45, this.radius_b, 0, Math.PI * 2, true);
  ctx.arc(this.y*this.c_area+45, this.x*this.c_area+135, this.radius_b, 0, Math.PI * 2, true);
  ctx.arc(this.y*this.c_area+45, this.x*this.c_area-20, this.radius_b, 0, Math.PI * 2, true);

  ctx.closePath();
  ctx.fillStyle = this.color_b;
  ctx.fill();
  */
ctx.drawImage(this.img2, this.y*this.c_area, this.x*this.c_area+97,80*this.imgScale,80);
ctx.drawImage(this.img2, this.y*this.c_area, this.x*this.c_area-97,80*this.imgScale,80);

ctx.drawImage(this.img2, this.y*this.c_area+97,this.x*this.c_area,80*this.imgScale,80);
ctx.drawImage(this.img2, this.y*this.c_area-97,this.x*this.c_area,80*this.imgScale,80);

  //this.paintBurnedLR();
};
/*
Bombs.prototype.paintBurnedLR = function() {
  //console.log("position cx/cy: "+ cx, cy);
  ctx.beginPath();
  //pinto ráfaga de bomba
  //ctx.arc(this.y*this.c_area+45, this.x*this.c_area+45, this.radius_b, 0, Math.PI * 2, true);
  ctx.arc(this.y*this.c_area-40, this.x*this.c_area+45, this.radius_b, 0, Math.PI * 2, true);
  ctx.arc(this.y*this.c_area+135, this.x*this.c_area+45, this.radius_b, 0, Math.PI * 2, true);
  ctx.closePath();
  ctx.fillStyle = this.color_b;
  ctx.fill();
};
*/
