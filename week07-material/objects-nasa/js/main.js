//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/


const input = document.querySelector("input")
 document.querySelector("button").addEventListener("click",fetchNasaDate)
 
 // initally hide them
 document.querySelector("#img").classList.add("hidden")
document.querySelector("video").classList.add("hidden")

function fetchNasaDate(){
    const inpDate = input.value 
  
    fetch(
        `https://api.nasa.gov/planetary/apod?api_key=mrlPEw3G0GSbdZ0gAz8oKuqU8xFn2ArRujzCZnPc&date=${inpDate}`
    ) 
    .then(res=>res.json())
    .then((data)=>{

        const {
                title, explanation , url
         }  = data

         if(data.media_type === "video"){
             document.querySelector("video").src = url
          document.querySelector("video").classList.remove("hidden")
          document.querySelector("#img").classList.add("hidden")
         } 
         else{
             document.querySelector("#img").src = url
             document.querySelector("#img").classList.remove("hidden")
             document.querySelector("video").classList.add("hidden")
             }

        console.log(data)

        console.log(data.url)

      document.querySelector("h2").textContent= `Name:${title}`
      document.querySelector("h3").textContent= `Description + ${explanation}`
   

    })
    .catch(err=>{
        console.log("error" + err)
    })
}

    