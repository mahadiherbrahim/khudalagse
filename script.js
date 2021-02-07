const searchMeal = () => {
    const searchItem = document.getElementById('searchItem').value
    loadMeal(searchItem);
};


const loadMeal = searchItem => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${searchItem}`)
        .then(response => response.json())
        .then(data => displayMeal(data.meals))
        .catch(error => alert("Please Try Again"))
};


const displayMeal = meals => {
    const ParentNode = document.getElementById('mealContainer')
    meals.forEach(meal => {
        const mealName = meal.strMeal
        const mealPicture = meal.strMealThumb
        const mealDiv = document.createElement('div')
        mealDiv.className = 'mealSingle'
        mealDiv.innerHTML = `
        <div onclick="mealDetails('${mealName}')">
            <img src="${mealPicture}">
            <h6>${mealName}</h6>
        </div>
        `
        ParentNode.append(mealDiv)
    });
}


const mealDetails = dishName => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${dishName}`)
        .then(resp => resp.json())
        .then(data => displayMealDetails(data.meals[0]))
        .catch(error => alert("There have no information about this Meal"))

}


const displayMealDetails = mealDetails => {
    const mealName = mealDetails.strMeal
    const mealPicture = mealDetails.strMealThumb

    const mealInfo1 = mealDetails.strIngredient1
    const mealInfo2 = mealDetails.strIngredient2
    const mealInfo3 = mealDetails.strIngredient3
    const mealInfo4 = mealDetails.strIngredient4
    const mealInfo5 = mealDetails.strIngredient5
    const mealInfo6 = mealDetails.strIngredient6

    const mealDetail = document.getElementById('mealDetails')
    mealDetail.innerHTML = `
        <img src="${mealPicture}" alt="">
            <h3>${mealName}</h3>
            <h4>Ingredient</h4>
            <p><i class="fa fa-arrow-alt-circle-right "></i>  ${mealInfo1}</p>
            <p><i class="fa fa-arrow-alt-circle-right "></i>  ${mealInfo2}</p>
            <p><i class="fa fa-arrow-alt-circle-right "></i>  ${mealInfo3}</p>
            <p><i class="fa fa-arrow-alt-circle-right "></i>  ${mealInfo4}</p>
            <p><i class="fa fa-arrow-alt-circle-right "></i>  ${mealInfo5}</p>
            <p><i class="fa fa-arrow-alt-circle-right "></i>  ${mealInfo6}</p>
    `
}
