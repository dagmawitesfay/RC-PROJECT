//Create a function that takes in an array of numbers. 
// Return a new array containing every even number from the original array (do not use map or filter)


function everNumbers(numbers){
    let evenNumbers=[]
    for(let i=0;i<numbers.length;i++){
        if(numbers[i]%2==0){
            evenNumbers.push(numbers[i])
        }

    }
    console.log(evenNumbers)
}
everNumbers([1,2,3,4,5,6,7,8,9,10])

