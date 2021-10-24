var mouse
var cat

function preload() {
    bg=loadImage("images/garden.png")
   tomImg1=loadAnimation("images/cat1.png")
    tomImg2=loadAnimation("images/cat2.png",'images/cat3.png')
    jerryImg2=loadAnimation("images/mouse2.png",'images/mouse3.png')
    jerryImg1=loadAnimation("images/mouse1.png")
    jerryImg4=loadAnimation("images/mouse4.png")
    tomImg4=loadAnimation("images/cat4.png")




    
}

function setup(){
    createCanvas(1000,800);
    cat = createSprite(870,600);
    cat.addAnimation("tomSleeping",tomImg1)
    cat.scale = 0.2

    mouse = createSprite(200,600);
    mouse.addAnimation("mouseWaving",jerryImg1)
    mouse.scale = 0.2




}

function draw() {

    background(bg);
    if(cat.x-mouse.x<(cat.width-mouse.width)/2){
        cat.velocityX=0
        cat.addAnimation("tomlastImage",tomImg4)
        cat.x=350
        cat.scale=0.2
        cat.changeAnimation("tomlastImage")
        mouse.addAnimation("jerrylastImage",jerryImg4)
        mouse.scale=0.15
        mouse.changeAnimation("jerrylastImage")




    }

    drawSprites();
}


function keyPressed(){

    if(keyCode==LEFT_ARROW){
        cat.velocityX=-0.5
        cat.addAnimation("tomRunning")
        cat.changeAnimation("tomRunning")
        mouse.addAnimation("jerryTeasing",jerryImg2)
        mouse.changeAnimation("jerryTeasing")
        mouse.frameDelay = 25


    }


}
