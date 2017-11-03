var myMaps;
var myBombs;
var myBoxes;
var myPlayers1;
var myPlayers2;
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
  myPlayers1 = new Players(6, 6, 6*89.75, 6*89.75,89.75);
  myPlayers2 = new Players(1, 1, 1*89.75, 1*89.75,89.75);
  var p_con = "w";
  var p2_con = "w2";
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
        console.log("funcion x -->", myPlayers2.x);
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
      case 16:
          console.log("Bombaaa!!!");
          myBombs.push(new Bombs);
          console.log(" <--funcion x/y: "+ myPlayers1.x, myPlayers1.y);
          myBombs[0].setBombs(myPlayers1.x, myPlayers1.y);
          console.log(myBoards.mapItems);
          break;


          /////////////////////////////////////
          case 87:
            console.log("arriba");
            console.log(" <--funcion x: ", myPlayers2.x);
            if(myPlayers2.x >= 0 || myPlayers2.x <= 8 || myPlayers2.y >= 0 || myPlayers2.y <= 8){
            myPlayers2.moveUp(myPlayers2.x, myPlayers2.y, p2_con,ctx);
            myPlayers2.clearPlayerPos(backPos_x, backPos_y, p_con_cls);
            };
            console.log("funcion x -->", myPlayers2.x);
            console.log(myBoards.mapItems);
            break;
          case 83:
            console.log("abajo");
            console.log(" <--funcion x: ", myPlayers2.x);
            if(myPlayers2.x >= 0 || myPlayers2.x <= 8 || myPlayers2.y >= 0 || myPlayers2.y <= 8){
            myPlayers2.moveDown(myPlayers2.x, myPlayers2.y, p2_con);
            myPlayers2.clearPlayerPos(backPos_x, backPos_y, p_con_cls);
            };

          console.log("funcion x -->", myPlayers2.x);
            console.log(myBoards.mapItems);
            break;
          case 65:
            console.log("izquierda");
            console.log(" <--funcion y: ", myPlayers2.y);
            myPlayers2.moveLeft(myPlayers2.x, myPlayers2.y, p2_con);
            myPlayers2.clearPlayerPos(backPos_x, backPos_y, p_con_cls);
            console.log("funcion y -->", myPlayers2.y);
            console.log(myBoards.mapItems);
            break;
          case 68:
            console.log("derecha");
            console.log(" <--funcion y: ", myPlayers2.y);
            myPlayers2.moveRight(myPlayers2.x, myPlayers2.y, p2_con);
            myPlayers2.clearPlayerPos(backPos_x, backPos_y, p_con_cls);
            console.log("funcion y -->", myPlayers2.y);
            console.log(myBoards.mapItems);
            break;
          case 32:
              console.log("Bombaaa!!!");
              myBombs.push(new Bombs);
              console.log(" <--funcion x/y: "+ myPlayers2.x, myPlayers2.y);
              myBombs[0].setBombs(myPlayers2.x, myPlayers2.y);
              console.log(myBoards.mapItems);
              break;


              //////////////////////////////////
      default:
        console.log("tecla sin movimiento");
    };
};//cierra onkeypress
    controlKey(key);
    //cada vez que hay movimiento actualiza posición a la array de Maps
    myPlayers1.addPlayerMap(myPlayers1.x, myPlayers1.y, p_con);
    myPlayers2.addPlayerMap(myPlayers2.x, myPlayers2.y, p2_con);
  };
  console.log(myBoards.mapItems);

  setInterval(newGame.update,30);

  //  setInterval(draw, 0);
}); //cierra Jquery
