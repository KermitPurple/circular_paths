class Path {
    constructor(theta, center, radius, color) {
        this.theta = theta;
        this.center = center;
        this.radius = radius;
        this.color = color;
    }

    update(speed){
        this.theta += speed;
        this.theta %= TWO_PI;
    }

    draw_line(){
        noFill();
        stroke(150);
        circle(
            this.center.x,
            this.center.y,
            this.radius * 2
        );
    }

    draw_dot(){
        noStroke();
        fill(this.color);
        circle(
            this.center.x + cos(this.theta) * this.radius,
            this.center.y + sin(this.theta) * this.radius,
            10,
        );
    }
}
