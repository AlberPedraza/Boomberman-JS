var myMaps;
var myBombs;
var myBoxes;
var myPlayers1;
var myBoards;
var canvas;
var ctx;
var newGame;
//myMaps.insertMap(8,8);
//console.log(myBoards.mapItems);

//Canvas

$(document).ready(function() {
  canvas = document.getElementById('map');
  ctx = canvas.getContext('2d');

  myMaps = new Maps();
  myBoards = new Boards(7, 7);
  myBoxes = new Boxes();
  myBombs = [];
  newGame = new Game();
  //(array2)x,y////(canvas px)cx,cv///c_area
  myPlayers1 = new Players(3, 4, 4*89.75, 3*89.75,89.75);

  var p_con = "w";
  var p_con_cls = "-";


  //añade bomba al mapa
  //myBombs.setBomb(1, 1);

////////GAME.js

//////////////////// Controles////////////////////////

var keyPrueba = document.getElementById("map");

document.onkeydown = function(ev) {
  var key = ev.keyCode;
  console.log("Keycode = " + key);

  controlKey = function(key) {
    var backPos_x = myPlayers1.x;
    var backPos_y = myPlayers1.y;

    switch (key) {
      case 38:
        console.log("arriba");
        console.log(" <--funcion x: ", myPlayers1.x);
        if(myPlayers1.x >= 0 || myPlayers1.x <= 8 || myPlayers1.y >= 0 || myPlayers1.y <= 8){
        myPlayers1.moveUp(myPlayers1.x, myPlayers1.y, p_con,ctx);
        myPlayers1.clearPlayerPos(backPos_x, backPos_y, p_con_cls);
        };
        console.log("funcion x -->", myPlayers1.x);
        console.log(myBoards.mapItems);
        break;
      case 40:
        console.log("abajo");
        console.log(" <--funcion x: ", myPlayers1.x);
        if(myPlayers1.x >= 0 || myPlayers1.x <= 8 || myPlayers1.y >= 0 || myPlayers1.y <= 8){
        myPlayers1.moveDown(myPlayers1.x, myPlayers1.y, p_con);
        myPlayers1.clearPlayerPos(backPos_x, backPos_y, p_con_cls);
        };

      console.log("funcion x -->", myPlayers1.x);
        console.log(myBoards.mapItems);
        break;
      case 37:
        console.log("izquierda");
        console.log(" <--funcion y: ", myPlayers1.y);
        myPlayers1.moveLeft(myPlayers1.x, myPlayers1.y, p_con);
        myPlayers1.clearPlayerPos(backPos_x, backPos_y, p_con_cls);
        console.log("funcion y -->", myPlayers1.y);
        console.log(myBoards.mapItems);
        break;
      case 39:
        console.log("derecha");
        console.log(" <--funcion y: ", myPlayers1.y);
        myPlayers1.moveRight(myPlayers1.x, myPlayers1.y, p_con);
        myPlayers1.clearPlayerPos(backPos_x, backPos_y, p_con_cls);
        console.log("funcion y -->", myPlayers1.y);
        console.log(myBoards.mapItems);
        break;
      case 17:
          console.log("Bombaaa!!!");
          myBombs.push(new Bombs);
          console.log(" <--funcion x/y: "+ myPlayers1.x, myPlayers1.y);
          myBombs[0].setBombs(myPlayers1.x, myPlayers1.y);
          console.log(myBoards.mapItems);
          break;
      default:
        console.log("tecla sin movimiento");

    };


};//cierra onkeypress
    controlKey(key);
    //cada vez que hay movimiento actualiza posición a la array de Maps
    myPlayers1.addPlayerMap(myPlayers1.x, myPlayers1.y, p_con);
  };
  console.log(myBoards.mapItems);

  setInterval(newGame.update,30);

  //  setInterval(draw, 0);
}); //cierra Jquery
