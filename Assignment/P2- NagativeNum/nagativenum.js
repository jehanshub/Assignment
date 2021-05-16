function getPositives(numbersArray) {
    let nagativeNumber=[];
    let positiveNumber=[];
    for(let i=0;i<numbersArray.length;i++)
    {
        if(numbersArray[i] < 0)
        {
            nagativeNumber.push(numbersArray[i]); 
        }
        else
        {
            positiveNumber.push(numbersArray[i]);
            
        }
    }
    console.log(nagativeNumber);
    console.log(positiveNumber)
}
getPositives([1,-3,-5,10,20,-30,-40]);

