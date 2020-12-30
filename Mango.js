class Mango{
    constructor(x,y,width,height){
        var options={
            isStatic:true,
            friction:1
        }
        this.body = Bodies.rectangle(x, y,width,height, options);
        this.width = width;
        this.height = height;
        this.img=loadImage("images/images/mango.png");
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle);
        rectMode(CENTER);
        imageMode(CENTER);
        image(this.img,0,0,this.width,this.height);
        pop();
    }
}