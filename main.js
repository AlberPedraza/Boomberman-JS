var myMaps;
var myBombs;
//var myBoxes = new Boxes();
var myPlayers;

//myMaps.insertMap(8,8);
//console.log(myMaps.mapItems);

$(document).ready(function(){
  myMaps = new Maps();
  myBombs = new Bombs();
  myPlayers = new Players(7,0);


  var p_con = "w";
  var p_con_cle = "-";



  myBombs.setBomb(1,1);
  //añade posicion al mapa
  myPlayers.addMap(myPlayers.x,myPlayers.y,p_con);

  controlKey = function(key){
  switch (key) {
    case 38:
      console.log("arriba");
      console.log(" antes de la funcion",myPlayers.x);
      myPlayers.moveUp(myPlayers.x,myPlayers.y,p_con);
      console.log("despues de la funcion",myPlayers.x);
      console.log(myMaps.mapItems);
    break;
    case 40:
      console.log("abajo");
      myPlayers.moveDown(myPlayers.x,myPlayers.y,p_con);
          console.log(myMaps.mapItems);
    break;
    case 37:
      console.log("izquierda");
      myPlayers.moveLeft(myPlayers.x,myPlayers.y,p_con);
      console.log(myMaps.mapItems);
    break;
    case 39:
      console.log("derecha");
      myPlayers.moveRight(myPlayers.x,myPlayers.y,p_con);
          console.log(myMaps.mapItems);
    break;
    default:
      console.log("tecla sin movimiento");
  }
    //cada vez que hay movimiento actualiza posición a la array de Maps
    myPlayers.addMap(myPlayers.x,myPlayers.y,p_con);
  };
  console.log(myMaps.mapItems);
$(".square").innerHTML="hola";
});

///////Canvas
//var map = document.getElementById("map");
//var ctx = map.getContext("2d");
