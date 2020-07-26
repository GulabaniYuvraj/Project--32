class plinkos {
    constructor(x,y,radius) {
        var options = {
            isDynamic: true
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = 10;
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        rectMode(CENTER);
        fill("white");
        rect(pos.x, pos.y, this.radius);
      }
};
