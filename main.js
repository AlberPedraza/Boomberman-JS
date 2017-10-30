var myMaps;
var myBombs;
//var myBoxes = new Boxes();
//var myPlayers = new Players();

//myMaps.insertMap(8,8);



//console.log(myMaps.mapItems);


$(document).ready(function(){
  myMaps = new Maps();
  myBombs = new Bombs();
  console.log(myMaps.mapItems);

  myBombs.setBomb(1,1);
  
$(".square").innerHTML="hola";

$(document).keypress();

});

///////Canvas
//var map = document.getElementById("map");
//var ctx = map.getContext("2d");
