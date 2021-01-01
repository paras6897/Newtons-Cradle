class Chain{
    constructor(body ){

        var options={
            bodyA:bodyA,
           
            length:100,
            stifness:0.5
        }
        this.chain=Constraint.create(options);
        World.add(world,this.chain);
    }
    display(){
        var pointA=this.chain.bodyA.position;
        
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}