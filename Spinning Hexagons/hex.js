class Hex {
	constructor(i, j, c) {
		if (j % 2 == 0) {
			this.x = i * res * 2 + res;
		} else {
			this.x = i * res * 2;
		}
		this.y = j * res * 2 + res/2 - (res/3 * j);
		this.i = i;
		this.j = j;
		this.r = 0;

		let d = dist(this.x, this.y, width/2, height/2);
		this.time = floor(map(d, 0, dist(0, 0, width/2, height/2), 0, maxDelay)) + wait - 10;

		this.timesChanged = 0;

		this.from;
		this.to;
		this.amt = 0;
		this.switching = false;

		this.colour = c;
		this.fromC;
		this.toC;
		this.amtC = 0;
	}

	show() {
		stroke(this.colour);
		push();
			translate(this.x, this.y);
			rotate(this.r);

			line(0, 0, 0, 0 - (res + lengthener));

			let leftX = (res + lengthener) * cos(150);
			let leftY = (res + lengthener) * sin(150);
			let rightX = (res + lengthener) * cos(30);
			let rightY = (res + lengthener) * sin(30);
			line(0, 0, leftX, leftY);
			line(0, 0, rightX, rightY);
		pop();
	}

	update() {
		if (this.switching) {
			if (this.amt > 1 && this.amtC > 1) {
				this.switching = false;
				this.from = null;
				this.to = null;
				this.amt = 0;
				this.fromC = null;
				this.toC = null;
				this.amtC = 0;
			} else {
				this.amt += increment;
				this.amtC += cIncrement;
				this.colour = lerpColor(this.fromC, this.toC, this.amtC);
				this.r = lerp(this.from, this.to, this.amt);
			}
		}

		if (this.time == wait) {
			this.switching = true;
			this.from = this.r;
			this.to = this.r + 60;
			this.fromC = this.colour;
			if (this.timesChanged % 2 == 0) {
				this.toC = colours[1];
			} else {
				this.toC = colours[0];
			}

			this.timesChanged ++;
			this.time = 0;
		}

		this.time ++;
	}
}
