class Circle {
	constructor(x, y, bigS, smallS, bigC, smallC) {
		this.x = x;
		this.y = y;
		this.r = smallS;

		this.toSize;
		this.bigS = bigS;
		this.smallS = smallS;

		this.switching = false;

		this.colour = smallC;
		this.bigC = bigC;
		this.smallC = smallC;
		this.toColour;
	}

	show() {
		fill(this.colour);
		circle(this.x, this.y, this.r);
	}

	switch(toBig) {
		if (toBig) {
			this.toSize = this.bigS;
			this.toColour = this.bigC;
		} else {
			this.toSize = this.smallS;
			this.toColour = this.smallC;
		}

		this.switching = true;
	}

	update() {
		if (this.switching) {
			if (dist(this.r, 0, this.toSize, 0) <= 3) {
				this.switching = false;
			} else {
				this.r = lerp(this.r, this.toSize, sizeIncrement);
				this.colour = lerpColor(this.colour, this.toColour, colourIncrement);
			}
		}
	}
}
