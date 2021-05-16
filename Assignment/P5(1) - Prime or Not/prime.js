function isPrime(n)
{
  let isPrime='';
  
  if(n%2 === 0)
  {
    isPrime = true;
  }
  else
  {
    isPrime = false;
  }
  console.log(isPrime);
}

isPrime(2);
isPrime(9);
