function sumArray(arr)
{
  var num = 0;
    for(var i=0; i < arr.length; i++)
    {
      num = num + arr[i];
    }
    return num;
}

var arr = [2, 3, -1, 5];
var sum = sumArray(arr);
console.log(sum);
