class Tree
{
	constructor(x,y,height,width)
	{
		this.x=x;
		this.y=y;
    this.height=height;
    this.width=width;
		
		this.image=loadImage("images/images/tree.png")
	}
	display()
	{
			push();
			fill(255)
			imageMode(CENTER);
			image(this.image, this.x,this.y,this.width,this.height);
			pop()
			
	}

}
