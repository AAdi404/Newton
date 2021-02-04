class String{
constructor(bodyA,pointB){
var options={
bodyA:bodyA,pointB:pointB,stiffness:0.04,length:500
}
this.pointB=pointB;
this.bodyA=bodyA;
this.string=Constraint.create(options);
World.add(world,this.string);
}
display(){
if(this.string.bodyA){
var pointA=this.string.bodyA.position;
var pointB=this.pointB;
strokeWeight(3);
line(pointA.x,pointA.y,pointB.x,pointB.y);
}
}
}