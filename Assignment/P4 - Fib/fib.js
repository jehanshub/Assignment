function findFibonacci(n) {
    
   if (n <= 1)
    {
        return n;
    }

    return findFibonacci(n - 1) + findFibonacci(n - 2);
}
var fib = findFibonacci(10);
 
console.log(fib);
