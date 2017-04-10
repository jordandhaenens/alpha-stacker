
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", 
"p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


function stackLetters(array) {
	var str = "";
	for (var i = 0; i < array.length; i++) {
		str += array[i];		
		if (i % 3 === 2) {
			str += " ";
		}
		console.log(str);
	} 
	return str;
}

stackLetters(alphabet);