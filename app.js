
//handler and event listeners also get all meal list together
const searchButton = document.getElementById("searchButton");
searchButton.addEventListener("click", function () {
    let searchInput = document.getElementById("searchInput").value;
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInput}`)
        .then(res => res.json())
        .then(data => {
            const mealList = document.getElementById("meal");
            let allMealListInfo = "";
            if (data.meals) {
                data.meals.forEach(meal => {
                    allMealListInfo += `
                        <div  onclick="displayIngredients(${meal.idMeal})"  class = "mealItem" meal-id = "${meal.idMeal}">
                            <div class = "mealImg">
                                <img src = "${meal.strMealThumb}">
                            </div>
                            <div class = "mealName">
                                <h3> ${meal.strMeal}</h3 >
                            </div >
                        </div >
                    `;
                });
            } else {
                allMealListInfo = "Your Meal Not Found!,Please Write Down correct meal Name";
            }
            mealList.innerHTML = allMealListInfo;
        });
})


//function for get ingredients
const displayIngredients = idMeal => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php/?i=${idMeal}`)
        .then(res => res.json())
        .then(data => displayIngredientsDetails(data.meals[0]));

}

//function for get details of ingredients
const displayIngredientsDetails = meal => {
    const IngredientsDetails = document.getElementById("ingredientsDetails");
    IngredientsDetails.innerHTML = `
    <img src="${meal.strMealThumb}">
    <h2>Meal Name:${meal.strMeal}</h2>
    <h3>Ingredients</h3>
    <ul>
    <li>${meal.strIngredient1}</li>
    <li>${meal.strIngredient2}</li>
    <li>${meal.strIngredient3}</li>
    <li>${meal.strIngredient4}</li>
    <li>${meal.strIngredient5}</li>
    <li>${meal.strIngredient6}</li>
    </ul>


    `;
}
