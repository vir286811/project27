class rope
{
    constructor(bodyA,bodyB,offsetX,offsetY)
    {
        var options= {
            bodyA:bodyA,
            bodyB:bodyB,
            pointB:{x:this.offsetX,y:this.offsetY}
            //length:10,
            //stiffness:0.04,
        
        }
        this.rope=Constraint.create(options);
        World.add(world,this.rope);

    }
    display()
    {
        line (this.rope.bodyA.position.x,this.rope.bodyA.position.y,this.rope.bodyB.position.x,this.rope.bodyB.position.y)
    }

    }