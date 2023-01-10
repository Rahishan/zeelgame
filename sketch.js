var bg,bgimg
var ground1,ground2

function preload(){
  titleImg=loadImage("title.png")
 bgimg=loadImage("./Monkey go Happy files/jungle.jpg")
 manImg=loadAnimation("./Monkey go Happy files/Monkey_01.png","./Monkey go Happy files/Monkey_02.png",
 "./Monkey go Happy files/Monkey_03.png","./Monkey go Happy files/Monkey_04.png",
 "./Monkey go Happy files/Monkey_05.png", "./Monkey go Happy files/Monkey_06.png",
 "./Monkey go Happy files/Monkey_07.png","./Monkey go Happy files/Monkey_08.png",
 "./Monkey go Happy files/Monkey_09.png","./Monkey go Happy files/Monkey_10.png");
  

}

function setup() {
createCanvas(windowWidth,windowHeight)

bg=createSprite(windowWidth/2,windowHeight/2,windowWidth,windowHeight)
bg.addImage(bgimg)
bg.scale=1.6

ground1=createSprite(windowWidth/2,windowHeight-10,windowWidth,50)
ground1.shapeColor="grey"

ground2=createSprite(windowWidth/2,windowHeight-5,windowWidth,10)
ground2.shapeColor="brown"

title=createSprite(windowWidth/2,55,50,50)
title.addImage(titleImg)
title.scale=1.4

man=createSprite(80,windowHeight-100,50,50)
man.addAnimation("running",manImg)
man.scale=0.3

  
}

function draw() {
 
  
  drawSprites();
}
