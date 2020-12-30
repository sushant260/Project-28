class Stone{
    constructor(x,y,width,height){
        var options={
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.2
        }
        this.body = Bodies.rectangle(x, y,50,50, options);
        this.width = 50;
        this.height = 50;
        this.img=loadImage("images/images/stone.png");
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.img,0,0,this.width,this.height);
        pop();
    }
}