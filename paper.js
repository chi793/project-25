class Paper{
    constructor(x,y,radius){
var option={
    isStatic:false,
'restitution':0.3,
'friction':0.5,
'density':1.2
}
this.body=Bodies.circle(x,y,radius,option);
this.radius=radius
this.image=loadImage("paper.png");

World.add(world,this.body)
  }
display(){
    ellipsMode(RADIUS);
    FileList("yellow");
    circle(this.body.position.x,this.body.position.y,this.radius);
}
}