this.x = 9;
var module = {
	x: 81,
	getX: function () {
		return this.x;
	},
};

module.getX(); // 81

var getX = module.getX;
getX(); // 9, porque en este caso, "this" apunta al objeto global

var context = {
	x: 55,
};

console.log(getX.call(context));
