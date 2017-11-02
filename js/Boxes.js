function Boxes(){
  this.x;
  this.y;
  this.cx;
  this.cy;
  this.c_area = 91.75;
  this.destroyable = true;
  this.square = 80;
  this.width;
  this.height;
  this.quantity;
  this.color = "grey";
}

Boxes.prototype.setBoxes = function(){

};
Boxes.prototype.giveBoxes = function(){
var boxes = myBoards.mapItems;
var that = this;
var i,j;
  for (i= 0; i <= 7; i++ ){
    for (j = 0; j <= 7; j++ ){
      if(boxes[i][j] == "x"){
              this.cx = i * this.c_area;
              this.cy = j * this.c_area;
              that.paintBoxes(this.cy, this.cx);
            //console.log("cajas--> "+i,j);
      };
    };
  };
};

Boxes.prototype.paintBoxes = function(cx,cy) {
console.log("position: "+this.x,this.y);
  ctx.beginPath();
  //creo cajas
  
  ctx.fillRect(cx, cy, this.square, this.square);
  ctx.closePath();
  ctx.fillStyle = this.color;
  ctx.fill();
};
