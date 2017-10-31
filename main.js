var myMaps;
var myBombs;
//var myBoxes = new Boxes();
var myPlayers;
var myBoards;
//myMaps.insertMap(8,8);
//console.log(myBoards.mapItems);


//Canvas


$(document).ready(function() {
  var canvas = document.getElementById('map');
  var ctx = canvas.getContext('2d');

  myMaps = new Maps();
  myBombs = new Bombs();
  myPlayers = new Players(7, 0);
  myBoards = new Boards(7, 7);

  var p_con = "w";
  var p_con_cls = "-";


  //añade bomba al mapa
  myBombs.setBomb(1, 1);
  //añade posicion del jugador al mapa
  myPlayers.addPlayerMap(myPlayers.x, myPlayers.y, p_con);

  //pinta jugador y tablero
  myBoards.start(ctx);
  myPlayers.paintPlayer(ctx);

//////////////////// Controles////////////////////////


//Prueba key
var keyPrueba = document.getElementById("map");
keyPrueba.onkeypress = function(evt) {
    var charCode = evt.which;
    var charStr = String.fromCharCode(charCode);
    alert(charStr);
};

document.onkeydown = function(ev) {
  var key = ev.keyCode;
  console.log("Keycode = " + key);

  controlKey = function(key) {
    var backPos_x = myPlayers.x;
    var backPos_y = myPlayers.y;

    switch (key) {
      case 38:
        console.log("arriba");
        console.log(" antes de la funcion", myPlayers.x);
        myPlayers.moveUp(myPlayers.x, myPlayers.y, p_con);
        myPlayers.clearPlayerPos(backPos_x, backPos_y, p_con_cls);
        console.log("despues de la funcion", myPlayers.x);
        console.log(myBoards.mapItems);
        break;
      case 40:
        console.log("abajo");
        myPlayers.moveDown(myPlayers.x, myPlayers.y, p_con);
        myPlayers.clearPlayerPos(backPos_x, backPos_y, p_con_cls);
        console.log("despues de la funcion", myPlayers.x);
        console.log(myBoards.mapItems);
        break;
      case 37:
        console.log("izquierda");
        myPlayers.moveLeft(myPlayers.x, myPlayers.y, p_con);
        myPlayers.clearPlayerPos(backPos_x, backPos_y, p_con_cls);
        console.log("despues de la funcion", myPlayers.x);
        console.log(myBoards.mapItems);
        break;
      case 39:
        console.log("derecha");
        myPlayers.moveRight(myPlayers.x, myPlayers.y, p_con);
        myPlayers.clearPlayerPos(backPos_x, backPos_y, p_con_cls);
        console.log("despues de la funcion", myPlayers.x);
        console.log(myBoards.mapItems);
        break;
      default:
        console.log("tecla sin movimiento");
    }


};//cierra onkeypress
    controlKey(key);
    //cada vez que hay movimiento actualiza posición a la array de Maps
    myPlayers.addPlayerMap(myPlayers.x, myPlayers.y, p_con);
  };
  console.log(myBoards.mapItems);


  //  setInterval(draw, 0);
}); //cierra Jquery
