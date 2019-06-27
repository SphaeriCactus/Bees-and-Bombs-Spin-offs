class Rotator {
	constructor(number, bigSize, smallSize, bigColour, smallColour, delay, radius, bigIndex, smallIndex, angleIncrement, direction) {
		this.bigSize = bigSize;
		this.smallSize = smallSize;
		this.bigColour = bigColour;
		this.smallColour = smallColour;
		this.delay = delay;
		this.radius = radius;
		this.bigIndex = bigIndex;
		this.smallIndex = smallIndex;
		this.angleIncrement = angleIncrement;
		this.direction = direction;

		this.time = 0;
		this.angle = 0;

		this.circles = [];
		for (let i = 0; i < number; i ++) {
			let a = i * (360/number);
			let x = this.radius * cos(a);
			let y = this.radius * sin(a);
			this.circles.push(new Circle(x, y, this.bigSize, this.smallSize, this.bigColour, this.smallColour));
		}
	}

	show() {
		push()
			translate(width/2, height/2);
			rotate(this.angle);
			for (let i = 0; i < this.circles.length; i ++) {
				this.circles[i].show();
			}
		pop();
	}

	check() {
		if (this.time == this.delay) {
			if (this.direction == "clockwise") {
				this.bigIndex ++;
				this.bigIndex = this.bigIndex % this.circles.length;
				this.smallIndex ++;
				this.smallIndex = this.smallIndex % this.circles.length;
			} else {
				this.bigIndex --;
				if (this.bigIndex == -1) {
					this.bigIndex = this.circles.length - 1;
				}
				this.smallIndex --;
				if (this.smallIndex == -1) {
					this.smallIndex = this.circles.length - 1;
				}
			}
			this.time = 0;

			this.circles[this.bigIndex].switch(true);
			this.circles[this.smallIndex].switch(false);
		}
	}

	update() {
		for (let i = 0; i < this.circles.length; i ++) {
			this.circles[i].update();
		}

		this.time ++;
		this.angle += this.angleIncrement;
	}
}
