var man , manImg;
var doctor , doctorImg ;
var clinic ;
var covid , covidImg ;
var gameState = 0 ;
var covidGroup ;

function preload(){
 manImg = loadImage ("boy.png") ;
 doctorImg = loadImage("download.jpg") ;
 covidImg = loadImage("covidImg.jpeg") ;
}
function setup() {
  createCanvas(800,400);
  man = createSprite(100, 380, 50, 50);
  man.addImage(manImg) ;
  man.scale = 0.06 ;
  man.setCollider("circle",0,0,400) ;

  clinic = createSprite(700,20,100,100) ;
  clinic.shapeColor = "white" ;

  doctor = createSprite(700,50,20,20) ;
  doctor.addImage(doctorImg) ;
  doctor.scale = 0.5 ;

  ground = createSprite(400,380,1600,20) ;
  ground.shapeColor = "brown" ;
  ground.velocityX = -3 ;
  ground.x = ground.width/2 ;

  cloudGroup = new Group() ;

}

function draw() {
  background(0);  
  if(gameState === 0){
     if(ground.x<0){
    ground.x = ground.width/2 ;
  }

  if(keyDown(UP_ARROW)){
    man.y = man.y-5 ;
  }

  if(keyDown(DOWN_ARROW)){
    man.y = man.y+5 ;
  }

  if(keyDown(RIGHT_ARROW)){
  man.x = man.x+5 ;
  }

  if(keyDown(LEFT_ARROW)){
   man.x = man.x-5 ;
  } 
  spawnCovid() ;
  if(man.isTouching(covidGroup)){
    gameState = 1 ;
  }
  }

  if(gameState===1){
   ground.velocityX = 0 ;

  }

  

man.collide(ground) ;
man.debug = true ;

 
  drawSprites();
}

function spawnCovid(){
  if(frameCount%100===0){
    covid = createSprite(800,380,20,20) ;
    covid.addImage(covidImg) ;
    covid.setLifetime = 267 ;

    covid.scale = 0.04;
    covid.velocityX = -3 ;
    covid.y = Math.round(random(90,380)) ;
    cloudGroup.add(covid) ;

  }
  

}