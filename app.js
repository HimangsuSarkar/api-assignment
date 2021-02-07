

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
                        <div class = "mealItem" data-id = "${meal.idMeal}">
                            <div class = "mealImg">
                                <img src = "${meal.strMealThumb}">
                            </div>
                            <div class = "mealName">
                               <h3>${meal.strMeal}</h3>
                            </div>
                        </div>
                        `;
                });
                //mealList.classList.remove('notFound');
            } else {
                allMealListInfo = "Your Meal Not Found!,Please Write Down correct meal Name";
                // mealList.classList.add('notFound');
            }

            mealList.innerHTML = allMealListInfo;
        });
})

// const mealItemList = document.getElementsByClassName("mealItem");
// mealItemList.addEventListener("click", function () {
//     console.log("clicked section");

// })
