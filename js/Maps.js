function Maps(){
  this.size_x = 8;
  this.size_y = 8;
  this.width;
  this.height;
  this.mapItems =
  [
    ["x","","x","","x","","x",""],
    ["","","","","","","",""],
    ["","x","","x","","x","","x"],
    ["","","","","","","",""],
    ["x","","x","","x","","x",""],
    ["","","","","","","",""],
    ["","x","","x","","x","","x"],
    ["x","","x","","x","","x",""],
  ];
};



Maps.prototype.makeMap = function(x,y){
  for(var a = 0; a < x; a++){
    for(var b = 0; b < y; b++){
      console.log(this.mapItems[a][b]);
    }
  }

};
Maps.prototype.insertMap = function(x,y){
  for(var a = 0; a < x; a++){
    for(var b = 0; b < y; b++){
      this.mapItems[a][b];
    }
  }

};
Maps.prototype.boxHard = function(){
  for(var a = 0; a < x; a++){
    for(var b = 0; b < y; b++){
      if(this.mapItems[a][b]=="x"){
        console.log("caja inrompible");
      }
   }
  }
};
Maps.prototype.limitMap = function(){

};
