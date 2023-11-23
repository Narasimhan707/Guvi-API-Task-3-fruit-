// Fetch data from the API
const fetchFruitData = () => {
  return new Promise((resolve, reject) => {
    fetch("https://www.fruityvice.com/api/fruit/all")
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });
};

// Display fruits on the webpage
const displayFruits = (fruitsData) => {
  const fruitContainer = document.getElementById("fruitContainer");

  // Loop through each fruit item and create Bootstrap cards
  fruitsData.forEach((fruit) => {
    const fruitCard = document.createElement("div");
    fruitCard.className = "col-md-4 mb-4";

    const card = document.createElement("div");
    card.classList.add("card", "mb-3");

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    const title = document.createElement("h5");
    title.classList.add("card-title");
    title.innerHTML = fruit.name;

    const family = document.createElement("p");
    family.classList.add("card-text");
    family.innerHTML = `Family: ${fruit.family}`;

    const order = document.createElement("p");
    order.classList.add("card-text");
    order.innerHTML = `Order: ${fruit.order}`;

    const genus = document.createElement("p");
    genus.classList.add("card-text");
    genus.innerHTML = `Genus: ${fruit.genus}`;

    const nutritions = document.createElement("p");
    nutritions.classList.add("card-text", "text-muted");
    nutritions.innerHTML = `Nutritional Information: 
            Calories: ${fruit.nutritions.calories}, 
            Fat: ${fruit.nutritions.fat}, 
            Sugar: ${fruit.nutritions.sugar}, 
            Carbohydrates: ${fruit.nutritions.carbohydrates}, 
            Protein: ${fruit.nutritions.protein}`;

    cardBody.appendChild(title);
    cardBody.appendChild(family);
    cardBody.appendChild(order);
    cardBody.appendChild(genus);
    cardBody.appendChild(nutritions);

    card.appendChild(cardBody);

    fruitCard.appendChild(card);

    // Append the Bootstrap card to the container
    fruitContainer.appendChild(fruitCard);
  });
};

// Call API on Load
document.addEventListener("DOMContentLoaded", () => {
  fetchFruitData()
    .then((data) => displayFruits(data))
    .catch((error) => console.error("Error fetching data:", error));
});
