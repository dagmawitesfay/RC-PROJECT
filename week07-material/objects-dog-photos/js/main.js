//Get a dog photo from the dog.ceo api and place the photo in the DOM
 const img = document.querySelector("img")
const url = "https://dog.ceo/api/breeds/image/random"
fetch(url)
    . then(res=>res.json())
    .then(data=>{
        console.log(data.message)
         img.src = data.message
    })
    .catch(err=>{
        console.log(`error ${err}`)
    }) ; 


