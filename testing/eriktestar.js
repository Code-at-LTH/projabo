o = {"tal": 123}
o.asd = "2"
console.log(o);



function Point(x, y) {
	var o;
	o.x = 0;
	var o = {}
	o.x = x;
	o.y = y;

	o.move = function(x, y) {
		this.x = x;
		this.y = y;
	}

	return o;
}

function Square(x, y, w, h) {
	o = Point(x, y);

	o.w = w;
	o.h = h;

	return o;
}

p = Point(100, 100);

console.log(p);

p.move(150, 150);

console.log(p);
