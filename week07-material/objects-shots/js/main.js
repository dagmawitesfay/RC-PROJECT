//The user will enter a cocktail. 
// Get a cocktail name, photo, 
// and instructions and place them in the DOM
// <input type="text" name="" value="">
		
        // <h2>Name</h2>
		// <img src="" alt="">
		// <h3>Instructions</h3>

 document.querySelector("button").addEventListener("click",fetchDrink)

function fetchDrink(){
     const input = document.querySelector("input").value
     const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${input}`
 fetch(url) 
    .then(res=>res.json())
    .then(data=>{

        const [
            { 
                strDrink , strInstructions , strDrinkThumb  
            }

        ] = data.drinks

        console.log(strDrink,strInstructions,strDrinkThumb)

      document.querySelector("h2").textContent= " " + strDrink
      document.querySelector("h3").textContent= " " +  strInstructions
    document.querySelector("img").src = strDrinkThumb
    })
    .catch(err=>{
        console.log("error" + err)
    })
}

    