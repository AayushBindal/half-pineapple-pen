var pineapplebackground1Load;
var pineappleBackground;

var pineapple;
var pineapple2;

var pine;
var pine1;
var pine2;
var melon2;

var goImage;
var go;

var edge;

function preload(){ 
pineapple = loadImage("pinapple.png");
pine1 = loadImage("Pineapple1.png");
pine2 = loadImage("pineapple2.png");
melon2 = loadAnimation("melon1.png","melon2.png","melon3.png");
pineapplebackground1Load = loadImage("pineapple-pen-master.png");
goImage = loadImage("go.png");
}
function setup(){
createCanvas(600,600);
edge = createEdgeSprites();
}
function draw(){
background("yellow");

pineappleBackground = createSprite(300,300);
pineappleBackground.addImage("1",pineapplebackground1Load);
pineappleBackground.scale = 1.99;

go = createSprite(300,300);
go.addImage("go",goImage);
go.scale = 0.3;

  if(mousePressedOver(go)){
     go.destroy();
   }

drawSprites();
}