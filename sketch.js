//Create variables here
var dog,happydog,db,foods,foodstock;
var dogimg
function preload()
{
  //load images here
  dogimg=loadImage("images/dogimg.png")
  happydog=loadImage("images/dogimg1.png")
}

function setup() {
  createCanvas(500, 500);
 
  dog=createSprite(250,250,40,40)
  dog.addImage( dogimg);
  dog.scale=0.15
  db=firebase.database()
  foodstock=db.ref('food')
  foodstock.on("value",readStock)
}


function draw() {  
background(46,139,87)

if(keyWentDown(UP_ARROW)){
  writestock(foods);
  dog.addImage(happydog)
  dog.scale=0.15
}
  drawSprites();
  //add styles here
textSize(15)
fill("red")
stroke("blue")
text("Note-press up arrow to feed the dog milk",200,450)
}
function readStock(data){
foods=data.val()
}
function writestock(x){
  if(x<=0){
    x=0
  }else{
    x=x-1
  }
  db.ref('/').update({
    foods:x
  })
}



