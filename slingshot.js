class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        //this.sling1=loadImage("sprites/sling1.png");
        //this.sling2=loadImage("sprites/sling2.png");
        //this.sling3=loadImage("sprites/sling3.png");

        this.sling = Constraint.create(options);
        this.pointB = pointB
        
        World.add(world, this.sling);
    }
    attach(body){
        this.sling.bodyA=body
    }

    fly(){
        this.sling.bodyA = null;
    }
    

    display(){
        
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            
            strokeWeight(4);
            stroke(48,22,8);
        
                
                
                line(pointA.x, pointA.y, pointB.x, pointB.y);
               
            }
            
        }
    }
    
