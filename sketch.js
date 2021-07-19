var sea, seaImg;
var ship, ship_sailing;


function preload(){
    
ship_sailing = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png"," ship-4.png");
seaImg= loadImage("sea.png");





}
function setup(){
    createCanvas(600,200);
    sea = createSprite(200,150);
    sea.addImage("sea",seaImg);
    sea.velocityX = -3;
    sea.scale=0.8;
    ship=createSprite(70,130,20,50);
    ship.addAnimation("sailing",ship_sailing);
    ship.scale=0.2;


    
   
    

}
function draw(){
    background(189);
    
    if (sea.x < 50){
       
        sea.x = width/2;

    }
    
    
    
    drawSprites();

  




}