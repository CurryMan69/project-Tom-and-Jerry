var bgImg;
var cat, catimg1, catimg2, catimg3;
var mouse, mouseimg1, mouseimg2, mouse3;


function preload() {
    //load the images here
    bgImg = loadImage("images/garden.png");
    catimg1 = loadImage("images/cat1.png");
    mouseimg1 = loadImage("images/mouse1.png");
    catimg2 = loadAnimation("images/cat2.png", "images/cat3.png");
    mouseimg2 = loadAnimation("images/mouse2.png", "images/mouse3.png")
mouse3 = loadImage("images/mouse4.png");
catimg3 = loadImage('images/cat4.png')
}

function setup(){
    createCanvas(windowWidth,windowHeight);

    //create tom and jerry sprites here
   cat = createSprite(800,400);
   cat.addImage(catimg1);
   cat.scale = 0.1

   mouse = createSprite(100,400);
   mouse.addImage(mouseimg1);
   mouse.scale = 0.1
}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide
if(cat.x - mouse.x < (cat.width - mouse.width)/2){
cat.velocityX = 0
cat.x = 140
cat.addImage('run',catimg3);
cat.changeAnimation('run', catimg3)
mouse.addImage('run1', mouse3);
mouse.changeAnimation('run1',mouse3)
}
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode === LEFT_ARROW){
    cat.addAnimation('moving', catimg2);
    cat.changeAnimation('moving',catimg2);
    cat.velocityX = -5

    mouse.addAnimation('moving1', mouseimg2);
    mouse.changeAnimation('moving1',mouseimg2);
    
}

}
