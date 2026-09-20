// Scoping -> a way in programming where the functions or variables are accessed or visible 
// Global Scoping vs Function and Block Scoping 
// 

// Global Scope
let outSide = "I am Global"

// Function 
function example(){
    let inside = "I am Local" 
   console.log(inside)
    console.log(outSide)

    
}
console.log(inside)

