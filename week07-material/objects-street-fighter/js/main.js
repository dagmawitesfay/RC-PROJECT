//Create a street fighter character class that makes fighting game characters with 4 properties and 3 methods

class streetFighter  {
   constructor(name , power ,health , technique ){
    this.name = name 
    this.power = power 
    this.health  = health
    this.technique = technique
   }

   attack(){
    console.log(`This is ${this.name} attacking `)
   }
    fight(){
    console(`I have power of ${power}` )
   }
   spin(){
    console.log("Spinning")
   }
   techniquee(){
    console.log("")
   }




} 

let ryu = new streetFighter("ryu",100,100,"spinning bird kick")
let chunLi = new streetFighter("chunLi",200,50,"AGUERO")
