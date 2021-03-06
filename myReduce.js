// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce for more details
// Don't worry about initialValue at first. You can always add it in later.

function myReduce(arr, callback) {
	//  CODE INSIDE HERE   //
	var valueN = arr[0];

	for (i = 1; i < arr.length; i++) {
		valueN = callback(valueN, arr[i], i, arr);
	}

	return valueN;
}

/*
 Best if you don't code out here.
 If you want to check your code, use `index.js`!
*/







// export this function (you can ignore this for now)
module.exports = myReduce;
