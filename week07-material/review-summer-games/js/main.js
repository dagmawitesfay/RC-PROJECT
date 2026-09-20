//Create a function that takes in an array of numbers. Multiply each number together and alert the product. 

// // 
// function multiply(numbers){
// alert (numbers.reduce((accumaltor,cuurentValue) => accumaltor * cuurentValue))
// }

// multiply([1,2,3,4])


// function multiply(numbers){
// let product = 1 ;

// for(let i=1 ; i<numbers.length;i++){
//     product*=numbers[i]
// }
// alert(product)
// }

// multiply([1,2,3,4])

function multiply(numbers){
     let product = 1 ;
numbers.forEach((element) => {
   product*=element
});
alert(product)
}
multiply([1,2,3,4])