//https://www.themealdb.com/api/json/v1/1/search.php?s=tomato
window.onload = function() {
    document.querySelector('.loader').style.display = 'none';
    document.querySelector('.loader').style.transition='5s ease-out'
  };
//   window.addEventListener('onload', ()=>{
// document.querySelector.style.display='none';

//   })
let result=document.getElementById("result");
const form=document.querySelector("form");
const input=document.querySelector("input");

let meals=[];
async function fetchMeals(search){
    
 await   fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
 .then((res)=>res.json())
    .then((data)=>(meals=data.meals))
    // console.log(meals)
}


function mealsDisplay(){
    if(meals===null){
        result.innerHTML="<h2>No result found</h2>"
      
    }else{

        meals.length=12;
        result.innerHTML=meals.map((meal)=>{
            let ingredients=[];
        for(i=1; i<21; i++){
            if(meal[`strIngredient${i}`]){
                let ingredient=meal[`strIngredient${i}`]
                let measure=meal[`strMeasure${i}`]
                //  console.log(ingredient + "-"+measure);
                 ingredients.push(`<li>${ingredient}- ${measure}</li>`);
            }
        }
        // console.log(ingredients)
           return `
            <li class="card rellax" data-rellax-speed="2">
            <h2><span>Name:</span>${meal.strMeal}</h2>
            <p><span>Country:</span>${meal.strArea}</p>
            <img src="${meal.strMealThumb}" alt="photo de ${meal.strMeal}" >
            <ul><span>Ingredients:</span>${ingredients.join("")}</ul>
            </li>
            `
        }
        ).join("")
    }
}
input.addEventListener('input', (e)=>{
    fetchMeals(e.target.value)

})
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    mealsDisplay();

})


var rellax=new Rellax('.rellax', {
    speed: -2,
    center: false,
    wrapper: null,
    round: true,
    vertical: true,
    horizontal: false
})

