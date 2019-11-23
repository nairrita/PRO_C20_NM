// creating 2 boxes
var box1,box2;

// setting up the code
function setup(){
  createCanvas(400,400);
  box1 = createSprite(200,200,50,50);
  box2 = createSprite(100,100,50,50);
  box1.shapeColor="white";
  box2.shapeColor="white";
  
}


function draw(){
  background(0);
  // movig the box with mouse
   box1.x = World.mouseX;
   box1.y = World.mouseY;
   

   // collision Algorithm of 2 boxes and everytime colour changes randomnly on collision
   if(box1.x-box2.x<box1.width/2+box2.width/2 
    && box2.x-box1.x<box1.width/2+box2.width/2
    && box1.y-box2.y< box1.height/2+box2.height/2
    && box2.y-box1.y< box1.height/2+box2.height/2){
   box1.shapeColor= color(random(255),random(255),random(255));
   box2.shapeColor = color(random(255),random(255),random(255));
   }

   else{
     box1.shapeColor = "white";
     box2.shapeColor = "white";
   }
   

   drawSprites();

}

