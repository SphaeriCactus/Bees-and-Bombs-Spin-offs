let hexes;
let res = 20;
let maxDelay = -40;
let cols = 30;
let rows = 30;

let lengthener = 3;

let wait = 70;

let increment = 0.05;
let cIncrement = 0.05;

let colours = [];

let s = 600;

function make2DArray(c, r) {
	let arr = new Array(c);
	for (let i = 0; i < arr.length; i ++) {
		arr[i] = new Array(r);
	}

	return arr;
}

function setup() {
	createCanvas(s, s);
	strokeWeight(4);
	strokeCap(SQUARE);
	angleMode(DEGREES);
	colorMode(HSB, 360, 100, 100);

	colours = [color(7, 88, 100), color(190, 87, 94)];

	hexes = make2DArray(cols, rows);
	for (let i = 0; i < hexes.length; i ++) {
		for (let j = 0; j < hexes[i].length; j ++) {
			hexes[i][j] = new Hex(i, j, colours[0]);
		}
	}
}

function draw() {
	background(0);
	for (let i = 0; i < hexes.length; i ++) {
		for (let j = 0; j < hexes[i].length; j ++) {
			hexes[i][j].show();
		}
	}

	for (let i = 0; i < hexes.length; i ++) {
		for (let j = 0; j < hexes[i].length; j ++) {
			hexes[i][j].update();
		}
	}
}
