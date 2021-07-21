class launcher 
{
   constructor(bodyA,pointB)
   {
      var options = 
      {
        bodyA: bodyA,
        pointB: pointB,
        stiffness: 0.004,
        length: 10
      }
      this.pointB = pointB
      this.launch = Constraint.create(options);
      World.add(world,this.launch)
    }
    attach(body){
        this.launch.bodyA = body;
    }
    
    fly(){
        this.launch.bodyA = null;
    }


   display()
   {
    if (this.launch.bodyA != null)
      {
      line(this.launch.bodyA.position.x,this.launch.bodyA.position.y)
      }



}

}