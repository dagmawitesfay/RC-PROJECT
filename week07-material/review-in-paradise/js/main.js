// *Variables*
// Declare a variable, reassign it to your favorite food, and alert the value
let favFood = "burger"
 favFood = "Dulet"
alert(favFood)

//Declare a variable, assign it a string, alert the second character in the string (Use your google-fu and the MDN)

const myName = "Dagi"
alert(myName.at(1))
// *Functions*
// Create a function that takes in 3 numbers. Divide the first two numbers
// and multiply the last. Alert the product. Call the function.

function numbers(num1,num2,num3){
    const division = num1/num2 ; 
    const product = division * num3
    alert(product)
}
numbers(4,1,16)

// Create a function that takes in 1 number. 
// Console log the cube root of the number. Call the function.
function numbers(num){
console.log(Math.cbrt(num))
alert(Math.cbrt(num))
}
numbers(87)

// *Conditionals*
//Create a function that takes in a month. If it is a summer month alert "YAY". If another other month, alert "Booo"
function numbers(month){
if(month==="June" || month==="July" || month==="August" ){
    alert("YAY")
}
else{
    alert("BOO")
}
}
numbers("january")
numbers("June")
//*Loops*
//Create a function that takes in a number. Console log every number from 1 to that number while skipping multiples of 5.
function skipMultipleOfFive(number){
for(let i=0;i<number;i++){
    if(i%5!==0){
        console.log(i)
    }
}
}

skipMultipleOfFive(10)