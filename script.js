// Constant global variables 

// Button variables
const receipe1Btn1 = document.querySelector("#btn1");
const receipe1Btn2  = document.querySelector("#btn2");
const receipe2Btn3 = document.querySelector("#btn3");
const receipe3Btn4 = document.querySelector("#btn4");
const receipe4Btn5 = document.querySelector("#btn5");
const receipe5Btn9 = document.querySelector("#btn9");
const receipe6Btn11 = document.querySelector("#btn11");
const receipe7Btn13 = document.querySelector("#btn13");
const receipe8Btn15 = document.querySelector("#btn15");




// See less buttons
const receipe2Btn6 = document.querySelector("#btn6");
const receipe3Btn7 = document.querySelector("#btn7");
const receipe4Btn8 = document.querySelector("#btn8");
const receipe5Btn10 = document.querySelector("#btn10");
const receipe6Btn12 = document.querySelector("#btn12");
const receipe7Btn14 = document.querySelector("#btn14");
const receipe8Btn16 = document.querySelector("#btn16");


// Food card variables 

// Card 1
const categorydesc = document.querySelector(".categorydesc");
const ingredients = document.querySelector(".ingredients");
const instructions = document.querySelector(".instructions");
const tutorial = document.querySelector(".tutorial");

// Card 2
const categorydesc2 = document.querySelector(".categorydesc2");
const ingredients2 = document.querySelector(".ingredients2");
const instructions2 = document.querySelector(".instructions2");
const tutorial2 = document.querySelector(".tutorial2");

// Card 3 
const categorydesc3 = document.querySelector(".categorydesc3");
const ingredients3 = document.querySelector(".ingredients3");
const instructions3 = document.querySelector(".instructions3");
const tutorial3 = document.querySelector(".tutorial3");

// Card 4 
const categorydesc4 = document.querySelector(".categorydesc4");
const ingredients4 = document.querySelector(".ingredients4");
const instructions4 = document.querySelector(".instructions4");
const tutorial4 = document.querySelector(".tutorial4");

// Card 5 

const categorydesc5 = document.querySelector(".categorydesc5");
const ingredients5 = document.querySelector(".ingredients5");
const instructions5 = document.querySelector(".instructions5");
const tutorial5 = document.querySelector(".tutorial5");

// Card 6 

const categorydesc6 = document.querySelector(".categorydesc6");
const ingredients6 = document.querySelector(".ingredients6");
const instructions6 = document.querySelector(".instructions6");
const tutorial6 = document.querySelector(".tutorial6");

// Card 7 

const categorydesc7 = document.querySelector(".categorydesc7");
const ingredients7 = document.querySelector(".ingredients7");
const instructions7 = document.querySelector(".instructions7");
const tutorial7 = document.querySelector(".tutorial7");

// Card 8 

const categorydesc8 = document.querySelector(".categorydesc8");
const ingredients8 = document.querySelector(".ingredients8");
const instructions8 = document.querySelector(".instructions8");
const tutorial8 = document.querySelector(".tutorial8");


// Fetch Functions 

// Receipe 1

receipe1Btn1.addEventListener("click", async function getReceipe1(){
  try{
    const response = await fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772")
    console.log(response)
    if(response.ok){
    const data = await response.json()
    console.log(data)

    categorydesc.textContent = `Meal category: ${data.meals[0].strCategory}`
    console.log(categorydesc.textContent)

    instructions.textContent = `Instructions: ${data.meals[0].strInstructions}`
    
    tutorial.href = data.meals[0].strYoutube
    tutorial.textContent = "Tutorial: click to watch tutorial!"

    categorydesc.style.display = "block";
    ingredients.style.display = "block";
    instructions.style.display = "block";
    tutorial.style.display = "block";
    }
    
    else{
      console.log("Server Error")
    }
    }
  
    catch(error){
    console.error("Fetch Error", error)
  
    }

} )

receipe1Btn2.addEventListener("click", ()=>{
    categorydesc.style.display = "none";
    ingredients.style.display = "none";
    instructions.style.display = "none";
})

// Receipe 2

receipe2Btn3.addEventListener("click", async function getReceipe2(){
  try{
    const response = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata")

    if(response.ok){
    const data = await response.json()

    categorydesc2.textContent = `Meal category: ${data.meals[0].strCategory}`
  
    instructions2.textContent = `Instructions: ${data.meals[0].strInstructions}`
    
    tutorial2.href = data.meals[0].strYoutube
    tutorial2.textContent = "Tutorial: click to watch tutorial!"

    categorydesc2.style.display = "block";
    ingredients2.style.display = "block";
    instructions2.style.display = "block";
    tutorial2.style.display = "block";
    }
    
    else{
      console.log("Server Error")
    }
    }
  
    catch(error){
    console.error("Fetch Error", error)
  
    }
  
   
  })

receipe2Btn6.addEventListener("click", ()=>{
  categorydesc2.style.display = "none";
  ingredients2.style.display = "none";
  instructions2.style.display = "none";
})


// Receipe 3

receipe3Btn4.addEventListener("click", async function getReceipe3(){
  try{
    const response = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=Gratin")
    console.log(response)
    if(response.ok){
    const data = await response.json()
    console.log(data)

    categorydesc3.textContent = `Meal category: ${data.meals[0].strCategory}`
    console.log(categorydesc3.textContent)
  
    // for(let i= 0; i < 50; i++){
    // ingredients.append = `ingredient${i}: ${data.meals[0].strIngredient[i]}, `
    // }
  
    instructions3.textContent = `Instructions: ${data.meals[0].strInstructions}`
    
    tutorial3.href = data.meals[0].strYoutube
    tutorial3.textContent = "Tutorial: click to watch tutorial!"

    categorydesc3.style.display = "block";
    ingredients3.style.display = "block";
    instructions3.style.display = "block";
    tutorial3.style.display = "block";
    }
    
    else{
      console.log("Server Error")
    }
    }
  
    catch(error){
    console.error("Fetch Error", error)
  
    }
  
   
  })

receipe3Btn7.addEventListener("click", ()=>{
  categorydesc3.style.display = "none";
  ingredients3.style.display = "none";
  instructions3.style.display = "none";
})

// Receipe 4 

receipe4Btn5.addEventListener("click", async function getReceipe4(){
  try{
    const response = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=Vegan")

    if(response.ok){
    const data = await response.json()

    categorydesc4.textContent = `Meal category: ${data.meals[1].strCategory}`
  
    instructions4.textContent = `Instructions:  ${data.meals[1].strInstructions}`
    
    tutorial4.href = data.meals[1].strYoutube
    tutorial4.textContent = "Tutorial: click to watch tutorial!"

    categorydesc4.style.display = "block";
    ingredients4.style.display = "block";
    instructions4.style.display = "block";
    tutorial4.style.display = "block";
    }
    
    else{
      console.log("Server Error")
    }
    }
  
    catch(error){
    console.error("Fetch Error", error)
  
    }
  
   
  })

receipe4Btn8.addEventListener("click", ()=>{
  categorydesc4.style.display = "none";
  ingredients4.style.display = "none";
  instructions4.style.display = "none";
})

// Receipe 5 

receipe5Btn9.addEventListener("click", async function getReceipe5(){
  try{
    const response = await fetch("https://themealdb.com/api/json/v1/1/search.php?s=Tzatziki")

    if(response.ok){
    const data = await response.json()

    categorydesc5.textContent = `Meal category: ${data.meals[0].strCategory}`
  
    instructions5.textContent = `Instructions:  ${data.meals[0].strInstructions}`
    
    tutorial5.href = data.meals[0].strYoutube
    tutorial5.textContent = "Tutorial: click to watch tutorial!"

    categorydesc5.style.display = "block";
    ingredients5.style.display = "block";
    instructions5.style.display = "block";
    tutorial5.style.display = "block";
    }
    
    else{
      console.log("Server Error")
    }
    }
  
    catch(error){
    console.error("Fetch Error", error)
  
    }
  
   
  })

receipe5Btn10.addEventListener("click", ()=>{
  categorydesc5.style.display = "none";
  ingredients5.style.display = "none";
  instructions5.style.display = "none";
})

// Receipe 6 

receipe6Btn11.addEventListener("click", async function getReceipe6(){
  try{
    const response = await fetch("https://themealdb.com/api/json/v1/1/search.php?s=Sushi")

    if(response.ok){
    const data = await response.json()

    categorydesc6.textContent = `Meal category: ${data.meals[0].strCategory}`

    instructions6.textContent = `Instructions:  ${data.meals[0].strInstructions}`
    
    tutorial6.href = data.meals[0].strYoutube
    tutorial6.textContent = "Tutorial: click to watch tutorial!"

    categorydesc6.style.display = "block";
    ingredients6.style.display = "block";
    instructions6.style.display = "block";
    tutorial6.style.display = "block";
    }
    
    else{
      console.log("Server Error")
    }
    }
  
    catch(error){
    console.error("Fetch Error", error)
  
    }
  
   
  })

receipe6Btn12.addEventListener("click", ()=>{
  categorydesc6.style.display = "none";
  ingredients6.style.display = "none";
  instructions6.style.display = "none";
})

// Receipe 7 

receipe7Btn13.addEventListener("click", async function getReceipe7(){
  try{
    const response = await fetch("https://themealdb.com/api/json/v1/1/search.php?s=Thai")
    if(response.ok){
    const data = await response.json()
    categorydesc7.textContent = `Meal category: ${data.meals[0].strCategory}`
  
    instructions7.textContent = `Instructions:  ${data.meals[0].strInstructions}`
    
    tutorial7.href = data.meals[0].strYoutube
    tutorial7.textContent = "Tutorial: click to watch tutorial!"

    categorydesc7.style.display = "block";
    ingredients7.style.display = "block";
    instructions7.style.display = "block";
    tutorial7.style.display = "block";
    }
    
    else{
      console.log("Server Error")
    }
    }
  
    catch(error){
    console.error("Fetch Error", error)
  
    }
  
   
  })

receipe7Btn14.addEventListener("click", ()=>{
  categorydesc7.style.display = "none";
  ingredients7.style.display = "none";
  instructions7.style.display = "none";
})

// Receipe 8 

receipe8Btn15.addEventListener("click", async function getReceipe8(){
  try{
    const response = await fetch("https://themealdb.com/api/json/v1/1/search.php?s=Spanish")
    console.log(response)
    if(response.ok){
    const data = await response.json()
    console.log(data)

    categorydesc8.textContent = `Meal category: ${data.meals[0].strCategory}`
    console.log(categorydesc8.textContent)
  
    instructions8.textContent = `Instructions:  ${data.meals[0].strInstructions}`

    tutorial8.href = data.meals[0].strYoutube
    console.log(tutorial8.href)
    tutorial8.textContent = "Tutorial: click to watch tutorial!"

    categorydesc8.style.display = "block";
    ingredients8.style.display = "block";
    instructions8.style.display = "block";
    tutorial8.style.display = "block";
    }
    
    else{
      console.log("Server Error")
    }
    }
  
    catch(error){
    console.error("Fetch Error", error)
  
    }
  
   
  })

receipe8Btn16.addEventListener("click", ()=>{
  categorydesc8.style.display = "none";
  ingredients8.style.display = "none";
  instructions8.style.display = "none";
})