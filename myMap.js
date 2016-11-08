// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Map

function myMap(arr, callback) {


var newArray = [];
for (i=0; i<arr.length; i++){
newArray[i]=callback(arr[i],i, arr);


}
return newArray;
}






// export this function (you can ignore this for now)

module.exports = myMap;
