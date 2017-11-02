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
  for (i = 0; i <= 8; i++ ){
    for (j = 0; j <= 8; j++ ){
      if(boxes[i][j] == "x"){
              this.cx = j * this.c_area;
              this.cy = i * this.c_area;
              that.paintBoxes(this.cx, this.cy);
            console.log("cajas--> "+i,j);
      };
    };
  };
};

Boxes.prototype.paintBoxes = function(cx,cy) {

  ctx.beginPath();
  //creo cajas
  ctx.fillRect(cx, cy, this.square, this.square);
  ctx.closePath();
  ctx.fillStyle = this.color;
  ctx.fill();
};
