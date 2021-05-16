var ar1 = [1, 2, 3];
var ar2 = [4, 5, 6];
mergeArrays(ar1, ar2);

function mergeArrays(ar1, ar2)
 {
    var arr=ar1.concat(ar2);
    console.log(arr);
 }