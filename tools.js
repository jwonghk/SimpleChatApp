module.exports = {
	foo: function (str, char, replacer) {
		const regex = new RegExp(char, "g")
		const replaced = str.replace(regex, replacer)
		return replaced		
	},
	
	bar: function () {
		console.log("Go for 2");
	}
};


var zemba = function() {
	
}