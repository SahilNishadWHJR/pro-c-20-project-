var player , path;
var diamonds , GAMEOVER ;
var playerImg , pathImg ;
var obstacle1Img ,obstacles2Img , GAMEOVERimg  ; 
var score= 0 ;

function preload(){

pathImg = loadImage("PATH.png");
playerImg = loadAnimation("Player-Animation1.png","Player-Animation2.png");
obstacle1Img = loadImage("obstacle1.png");
GAMEOVERimg = loadImage("gameOver.png");
obstacle2Img = loadImage("diamonds.png");

}


function setup() {
    createCanvas(800,500);

    path = createSprite(400,250);
    path.addAnimation("road",pathImg);
    path.velocityX=-6 ;
    path.scale=0.7
 
    player = createSprite(400,250,40,40);
    player.addAnimation("cycle",playerImg);
    player.scale=0.06
    
  
  
ballG = new Group();
diamondsG = new Group();
}

function draw() {
    background(225);
      
  if(player.isTouching(diamondsG)){
    diamondsG.destroyEach();
    score = score+1 ; 
  }
    if(ballG.isTouching(player)){
      score=score-1;
      ballG.destroyEach();
   }
   
    //code to move player 
   player.y = World.mouseY; 
    //code to reset the background
  if(path.x < 0 ){
    path.x = width/2;
  }
      
 
    drawSprites();
  textSize(30) ;
  text("Score:"+score,350,50);
  obstacle1();
  obstacle2();
}
function obstacle1 (){
  if (World.frameCount % 200 == 0) {
    var ball = createSprite(800,Math.round(random(0, 450),10, 10));
    ball.addImage(obstacle1Img);
    ball.scale=0.05;
    ball.velocityX = -6;
    ball.lifetime = 150;
    ballG.add(ball);
  }
}
function obstacle2 (){
if(World.frameCount % 200 == 0){
  var diamonds = createSprite(750,Math.round(random(0,400),10,10));
  diamonds.velocityX = -6;
  diamonds.addImage(obstacle2Img);
  diamonds.scale = 0.03;
  diamonds.lifetime = 150 ; 
  diamondsG.add(diamonds)
}
}