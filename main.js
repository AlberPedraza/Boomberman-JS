var myMaps;
var myBombs;
//var myBoxes = new Boxes();
var myPlayers;

//myMaps.insertMap(8,8);
//console.log(myMaps.mapItems);

$(document).ready(function(){
  myMaps = new Maps();
  myBombs = new Bombs();
  myPlayers = new Players(4,4);


  var p_pos_x = myPlayers.x;
  var p_pos_y = myPlayers.y;
  var p_con = "w";
  var p_con_cle = "-";


  console.log(myMaps.mapItems);
  myBombs.setBomb(1,1);
  myPlayers.addMap(p_pos_x,p_pos_y,p_con);

  controlKey = function(key){
    console.log(myPlayers.x);
  switch (key) {
    case 38:
      console.log("arriba");
      myPlayers.moveUp(myPlayers.x,myPlayers.y,p_con);
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

  };

$(".square").innerHTML="hola";
});

///////Canvas
//var map = document.getElementById("map");
//var ctx = map.getContext("2d");
