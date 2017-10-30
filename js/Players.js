function Players(){
  this.position_x;
  this.position_y;
  this.direction_x;
  this.direction_y;
};

Players.prototype.move = function(key){

switch (key) {
  case key == 38:
    console.log("arriba");
  break;
  case key == 40:
    console.log("abajo");
  break;
  case key == 37:
    console.log("izquierda");
  break;
  case key == 39:
    console.log("derecha");
  break;
  default:
    console.log("tecla sin movimiento");
}

};


Players.prototype.lifeCheck = function(){

};
