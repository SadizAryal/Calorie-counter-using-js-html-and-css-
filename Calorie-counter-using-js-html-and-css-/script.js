console.log('is the code working');


const pre = document.querySelector(".premium");
const img = document.querySelector(".imgCont")
const quantity = document.querySelector(".quantity")
const images2 = document.querySelector(".images")
const result2 = document.querySelector(".result")
const macros = document.querySelector(".button")
const pre2 = document.querySelector(".premium2")

function jsonData(images) {
  images.forEach(image => {
    console.log(image["description"])

    let a = document.createElement("div")
    let wildimg = document.createElement("img")
    wildimg.setAttribute("class", "img1")
    wildimg.src = image["image"]
    a.appendChild(wildimg)
    text = document.createElement("h3")
    text.innerText = image["description"]
    a.appendChild(text)
    img.appendChild(a)

  });

}
var food_data;

function myFunction() {


  fetch('./images.json')

    .then(res => res.json())
    .then(data => {
      console.log(data);
      jsonData(data["images"]);
  
    })
  }
const foodData = {
    "chicken": { "calories": 165, "protein": 31, "fats": 3.6, "carbs": 0 },
    "rice": { "calories": 130, "protein": 2.7, "fats": 0.3, "carbs": 28 },
    "egg": { "calories": 143, "protein": 12.6, "fats": 9.5, "carbs": 1.1 }
};



document.addEventListener("DOMContentLoaded", function () {
  const quantityInput = document.querySelector(".quantity input"); 
  const enterButton = document.querySelector(".quantity .submit"); 
  const resultsSection = document.querySelector(".macros1"); 

  enterButton.addEventListener("click", function () {
      const quantity = parseFloat(quantityInput.value); 
      const selectedFood = "chicken"; 

    

      const macros = foodData[selectedFood]; 

      // Calculate based on formula
      const calories = (macros.calories * quantity / 100).toFixed(1);
      const protein = (macros.protein * quantity / 100).toFixed(1);
      const fats = (macros.fats * quantity / 100).toFixed(1);
      const carbs = (macros.carbs * quantity / 100).toFixed(1);

  
      resultsSection.innerHTML = `
          <span>Calorie: ${calories} kcal</span><br>
          <span>Protein: ${protein} g</span><br>
          <span>Carbohydrate: ${carbs} g</span><br>
          <span>Fats: ${fats} g</span><br>
      `;
  });
});

//<img class="img1" src="Images/images.jpg" alt="">

pre.addEventListener("click", () => {
  alert("Please Upgrade to the Premium pass for further service ")
}
)
img.addEventListener("click", () => {
  quantity.style.display = "block"

})
document.querySelector(".btns").addEventListener("click", () => {
  images2.style.display = "block"
  result2.style.display = "block"
}
)

macros.addEventListener("click", () => {
  pre2.style.display = "block";

}
)
pre2.addEventListener("click", () => {
  alert("Please Upgrade to the Premium pass for further service ")
}
)

