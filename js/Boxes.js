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
        //console.log("cajas!!!!! "+i,j);
        //console.log("esto es i: "+i);

            console.log("de 0: " + boxes[i][j]);
            if(i == 0 || j == 0){
              if(i == 0){
                this.cx = 0;
                that.paintBoxes(this.cx,this.cy);
              }
              if(j == 0){
                this.cy = 0;
                that.paintBoxes(this.cx,this.cy);
              }
              if(i == 0 && j == 0){
                this.cx = 0;
                this.cy = 0;
                that.paintBoxes(this.cx,this.cy);
              }
            }
            if(i > 0){
              this.cx = i * this.c_area;
              that.paintBoxes(this.cx, this.cy);
            }
            if(j > 0){
              this.cy = j * this.c_area;
              that.paintBoxes(this.cx, this.cy);
            }

            console.log("cajas!!!!! "+i,j);

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
