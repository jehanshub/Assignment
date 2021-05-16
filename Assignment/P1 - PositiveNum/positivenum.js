function getPositives(numbersArray) {
    let positiveNumber=[];
    
    for(let i=0;i<numbersArray.length;i++)
    {
        if(numbersArray[i]>=0)
        {
            positiveNumber.push(numbersArray[i]);
        }
        else
        {
            console.log("Not a positive Number");
        }
    }
    console.log(positiveNumber);
}
getPositives([1,-3,-5,10,20,-30,-40]);
