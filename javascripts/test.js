

var aha_method = {};

aha_method.Closet = function(attr) {
	this.owner = attr;
};


aha_method.Closet.prototype.changeClosetOwner = function(attr) {
	this.owner = attr;
};

aha_method.Closet.prototype.whoOwnsTheCloset = function() {
	return this.owner + "'s Closet";
};





var brees_closet = new aha_method.Closet("Bree");
var geoffs_closet = new aha_method.Closet("Geoff");


console.log(brees_closet.whoOwnsTheCloset())
console.log(geoffs_closet.whoOwnsTheCloset())

brees_closet.changeClosetOwner('Kaden')

console.log(brees_closet.whoOwnsTheCloset())
console.log(geoffs_closet.whoOwnsTheCloset())

