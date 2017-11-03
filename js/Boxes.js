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
  this.imgScale = this.c_area/this.c_area;

  this.color = "grey";
  this.img = new Image();
  this.img.src = './img/box.png';
  this.img.addEventListener('load', this.paintBoxes.bind(this));
}

Boxes.prototype.setBoxes = function(){
var boxes = myBoards.mapItems;
var that = this;
var i,j;
  for (i= 0; i <= 7; i++ ){
    for (j = 0; j <= 7; j++ ){
      if(boxes[i][j] == "x"){
              this.cx = i * this.c_area;
              this.cy = j * this.c_area;
              myBoxes.paintBoxes(this.cy, this.cx);
            //console.log("cajas--> "+i,j);
      };
    };
  };
};

Boxes.prototype.paintBoxes = function(cx,cy) {
/*
ctx.beginPath();
  //pinto cajas
  ctx.fillRect(cx, cy, this.square, this.square);
  ctx.closePath();
  ctx.fillStyle = this.color;
  ctx.fill();
*/

    ctx.drawImage(this.img, cx, cy,80*this.imgScale,80);

};
