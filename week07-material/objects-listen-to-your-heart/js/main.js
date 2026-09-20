//Create a stopwatch object that has four properties and three methods

const stopWatch = {
    color: "black" ,
    weight : "light",
    second : "15" ,     
    start(){
        console.log("the stopwatch started")
    } ,
    end(){
        console.log("the stopwatch ended")
    } ,

    logSecond(){
        console.log(`it is now ${this.second}`)
    }

}
