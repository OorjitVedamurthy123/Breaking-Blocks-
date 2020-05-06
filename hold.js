class Hold{
    constructor(bodyA,pointB){
       var options = {
           bodyA : bodyA,
           pointB : pointB,
           stiffness:0.04,
           length:5
           
       }
       this.pointB = pointB
       this.hold = Constrained.create(options);
       this.sling1 = loadImage("catapult.png");
       this.sling2 = loadImage("sling3.png");
       World.add(world,this.hold);
       
    }
   

      fly(){
          this.hold.bodyA = null;
      }  

    
    display(){
        image(this.sling1,70,260,230,230);
        if(this.hold.bodyA){
        var pointA = this.hold.bodyA.position;
        var pointB = this.pointB
        push();
        stroke('rgb(36,16,14)');
       if(pointA.x<200){
         strokeWeight(7);
     line(pointA.x-20,pointA.y,pointB.x-10,pointB.y-15);
     line(pointA.x-20,pointA.y,pointB.x+20,pointB.y-15);
     image(this.sling2,pointA.x-20,330,12,30);
       }
       else{
         strokeWeight(7);
      line(pointA.x+25,pointA.y,pointB.x-10,pointB.y-15);
      line(pointA.x+25,pointA.y,pointB.x+20,pointB.y-3);
      image(this.sling2,pointA.x-20,330,12,30);
       }
       pop();

        }
    
    }
    
}