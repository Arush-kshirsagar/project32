const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body=Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var ground,box1,box2,box3,box4,box5,box6,box7,box8;
var box9,box10,box11,box12,ball,polygonImg,stand1,stand2,canvas;
var score=0;
var bg="morning.jpg",backgroundimg
function preload(){
    polygonImg=loadImage("polygon.png");
    getBackgroundImg();
}
function setup(){
    var canvas = createCanvas(900,400)
    engine=Engine.create();
    world=engine.world;
Engine.run(engine);
  ground=new Ground();
   // use two stands,one on right and on to left

   stand1=new Stand(250,350,250,20);
    box1=new Box(200,300,50,50);
    box2=new Box(250,300,50,50);
    box3=new Box(300,300,50,50);
    box4=new Box(230,250,50,50)
    box5=new Box(280,250,50,50);
    box6=new Box(250,200,50,50)
    
    stand2=new Stand(600,250,250,20);
    box7=new Box(600,215,50,50);
    box8=new Box(650,215,50,50);
     box9=new Box(550,215,50,50);
     box10=new Box(630,165,50,50)
     box11=new Box(580,165,50,50);
    box12=new Box(610,105,50,50)
    //max 10 boxes for 1 and 5 for two
      ball=Bodies.circle(50,200,20);
      World.add(world,ball)
    
     slingshot = new SlingShot(this.ball,{x:100, y:90});

}
function draw(){
   if(backgroundimg) 
    background(backgroundimg);
    fill("red")
    textSize(15);
    text("Score:"+score,750,10)
    ground.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    stand1.display();
    stand2.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();

    // make text,display everything,fill after box
    imageMode(CENTER);
    image(polygonImg,ball.position.x,ball.position.y,40,40);
    slingshot.display();
}
function mouseDragged(){
    Matter.Body.setPosition(this.ball, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}
function keyPressed(){
    if(keyCode===32){
      slingshot.attach(this.ball);  
    }
}
async function getBackgroundImg(){
    var response=await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON=await response.json();

    var datetime=responseJSON.datetime
    var hour=datetime.slice(11.13);

    

    if(hour>=06 && hour<=19){
        bg="morning.jpg"
    }
    else{
        bg="night.jpg"

    }
    backgroundimg=loadImage(bg);
    console.log(backgroundimg);
}