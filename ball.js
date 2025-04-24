function Ball(){
    this.x = width /2;
    this.y = height /2 + 150;
    this.radius = 20;
    this.vx = 5;
    this.vy = 5;
    
    this.show = function(){
    fill(255);
    ellipse(this.x,this.y,this.radius,this.radius);
    }
    
    this.move = function(){
    this.x += this.vx;
    this.y += this.vy;
    if(this.x > width || this.x < 0)
    this.vx = -this.vx;
    }
    
    this.collision = function(e){
    if(this.y <= e.y + e.h/2 && this.y >= e.y - e.h/2)
    if(this.x >= e.top && this.x <= e.bottom)
    return true;
    return false;
    }
    }
    