const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;
var engine;
var world;
var backgroundImage;
var stand;
var string1;
var string2;
var string3;
var string4;
var string5;
var ball1;
var ball2;
var ball3;
var ball4;
var ball5;
function preload(){
backgroundImage=loadImage("sprites/background.png");
}
function setup(){
var canvas=createCanvas(1375,800);
engine=Engine.create();
world=engine.world;
ball1=new Ball(875/2,100,62.5,62.5);
ball2=new Ball(1125/2,100,62.5,62.5);
ball3=new Ball(1375/2,100,62.5,62.5);
ball4=new Ball(1625/2,100,62.5,62.5);
ball5=new Ball(1875/2,100,62.5,62.5);
stand=new Stand(75,50,2750,100);
string1=new String(ball1.body,{x:875/2,y:100});
string2=new String(ball2.body,{x:1125/2,y:100});
string3=new String(ball3.body,{x:1375/2,y:100});
string4=new String(ball4.body,{x:1625/2,y:100});
string5=new String(ball5.body,{x:1875/2,y:100});
}
function draw(){
background(backgroundImage);
Engine.update(engine);
console.log(ball2.body.position.x);
console.log(ball2.body.position.y);
console.log(ball2.body.angle);
stand.display();
string1.display();
string2.display();
string3.display();
string4.display();
string5.display();
ball1.display();
ball2.display();
ball3.display();
ball4.display();
ball5.display();
Throw();
}
function Throw(){
if(keyCode===LEFT_ARROW){
Matter.Body.applyForce(ball1.body,ball1.body.position,{
x:-50,
y:0
}
);
}
}
