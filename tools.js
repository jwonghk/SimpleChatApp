module.exports = {
	foo: function (str, char, replacer) {
		const regex = new RegExp(char, "g")
		const replaced = str.replace(regex, replacer)
		return replaced		
	},
	
	bar: function () {
		console.log("Go for 2");
	},

	test1: function() {
		console.log("INSIDE TOOLS: Hello, World!");
	},
	
    p2: function () {setTimeout( function() {
	    console.log('hi');
    },7000)
}
	
};

// const vs let vs var
const meeting = {
	time : "monday",
	location: "shanghai",
	hour : 82
}

var zemba = function() {
	
}

exports.zem2 = zemba;
