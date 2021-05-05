var mouse,cat;
var bg,bgImg;
var mouseImg,catImg1,catImg2,mouseImg2,mouseImg3,catImg3;
function preload() {
    //load the images here
    catImg1=loadAnimation("images/cat1.png");
    mouseImg=loadAnimation("images/mouse1.png");
    catImg2=loadAnimation("images/cat2.png","images/cat3.png");
    mouseImg2=loadAnimation("images/mouse2.png","images/mouse3.png");
    catImg3=loadAnimation("images/cat4.png");
    mouseImg3=loadAnimation("images/mouse4.png");
    bgImg=loadImage("images/garden.png");

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat=createSprite(800,650,20,20);
    cat.addAnimation("catImg",catImg1);
    cat.scale=0.25;
    mouse=createSprite(200,700,20,20);
    mouse.addAnimation("mouseImg",mouseImg);
    mouse.scale=0.2;
}

function draw() {
    
    background(bgImg);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < (cat.width - mouse.width)/2 ){
        cat.x=600;
        cat.velocityX=0;
        cat.addAnimation("catImg3",catImg3);
        cat.changeAnimation("catImg3",catImg3);
        mouse.addAnimation("mouseImg",mouseImg3);
        mouse.changeAnimation("mouseImg",mouseImg3);
    }
    if(keyDown(LEFT_ARROW)){
        keyPressed()
    }


    drawSprites();
    
}


function keyPressed(){

  //  x=false;
  mouse.frameDelay=50;
  //For moving and changing animation write code here

        mouse.addAnimation("mouseTeasing",mouseImg2);
        mouse.changeAnimation("mouseTeasing",mouseImg2);
        cat.velocityX=-2;
        cat.addAnimation("catImg2",catImg2);
        cat.changeAnimation("catImg2",catImg2);
        


}
