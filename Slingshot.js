class slingshot{
constructor(bodyA,bodyB){
    var options={
     stiffness:0.04,
     length:10,
     bodyA:bodyA,
     bodyB:bodyB,
}
    this.slingshot=Matter.Constraint.create(options)
    World.add(world, this.slingshot);
}
display(){  
 var A=this.slingshot.bodyA.position
 var B=this.slingshot.bodyB.position
line (A.x,A.y,B.x,B.y)
}


}
