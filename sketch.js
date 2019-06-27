let sizeIncrement = 0.07;
let colourIncrement = 0.07;

let rotators = [];

function setup() {
	createCanvas(600, 600);
	angleMode(DEGREES);
	noStroke();

	rotators.push(new Rotator(
		18, // Number
		70, 20, // Size
		color(171, 32, 195), color(202, 116, 218), // Colour
		10, // Delay
		250, // Radius
		0, 9, // Index
		0.2, // Angle Increment
		"counterclockwise" // Direction
	));

	rotators.push(new Rotator(
		12, // Number
		70, 20, // Size
		color(34, 70, 208), color(117, 139, 226), // Colour
		10, // Delay
		150, // Radius
		0, 6, // Index
		-0.2, // Angle Increment
		"clockwise" // Direction
	));

	rotators.push(new Rotator(
		10, // Number
		45, 10, // Size
		color(243, 218, 13), color(247, 232, 104), // Colour
		10, // Delay
		70, // Radius
		0, 3, // Index
		0.2, // Angle Increment
		"counterclockwise" // Direction
	));
}

function draw() {
	background(248);
	for (let i = 0; i < rotators.length; i ++) {
		rotators[i].check();
	}

	for (let i = 0; i < rotators.length; i ++) {
		rotators[i].show();
	}

	for (let i = 0; i < rotators.length; i ++) {
		rotators[i].update();
	}
}

function sumColour(colour) {
	let s = red(colour) + green(colour) + blue(colour);
	return s;
}
