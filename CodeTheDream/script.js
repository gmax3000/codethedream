// CAT API
document.addEventListener("DOMContentLoaded", function () {
    const newCatButton = document.getElementById("newCatButton");
    const catImage = document.getElementById("catImage");

    // Function to fetch a random cat image from The Cat API
    function fetchRandomCat() {
        fetch("https://api.thecatapi.com/v1/images/search")
            .then((response) => response.json())
            .then((data) => {
                // Extract the image URL from the API response
                const imageUrl = data[0].url;
                catImage.src = imageUrl;
            })
            .catch((error) => {
                console.error("Error fetching cat image: " + error);
            });
    }

    // Add a click event listener to the "New Cat" button
    newCatButton.addEventListener("click", fetchRandomCat);

    // Fetch the first cat image when the page loads
    fetchRandomCat();
});

// DOG API
document.addEventListener("DOMContentLoaded", function () {
    const newDogButton = document.getElementById("newDogButton");
    const dogImage = document.getElementById("dogImage");

    // Function to fetch a random dog image from The Dog API
    function fetchRandomDog() {
        fetch("https://api.thedogapi.com/v1/images/search")
            .then((response) => response.json())
            .then((data) => {
                // Extract the image URL from the API response
                const imageUrl = data[0].url;
                dogImage.src = imageUrl;
            })
            .catch((error) => {
                console.error("Error fetching dog image: " + error);
            });
    }

    // Add a click event listener to the "New DOG" button
    newDogButton.addEventListener("click", fetchRandomDog);

    // Fetch the first dog image when the page loads
    fetchRandomDog();
});

// rndomizer
function getRandomNumber(min, max) {
    // Generate a random decimal number between 0 and 1
    const randomDecimal = Math.random();
  
    // Scale and shift the random decimal to fit the specified range
    const randomInRange = Math.floor(randomDecimal * (max - min + 1)) + min;
  
    return randomInRange;
  }

// PET API
document.addEventListener("DOMContentLoaded", function () {
    const newPetButton = document.getElementById("newPetButton");
    const petImage = document.getElementById("petImage");

    // Function to fetch a random dog image from The Pet API
    function fetchRandomPet() {
        const randomNumber = getRandomNumber(0, 1);
        if(randomNumber == 0){
            fetch("https://api.thedogapi.com/v1/images/search")
            .then((response) => response.json())
            .then((data) => {
                // Extract the image URL from the API response
                const imageUrl = data[0].url;
                petImage.src = imageUrl;
            })
            .catch((error) => {
                console.error("Error fetching dog image: " + error);
            });
            newPetButton.addEventListener("click", fetchRandomPet);
            // fetchRandomDog();
      }else{
            fetch("https://api.thecatapi.com/v1/images/search")
            .then((response) => response.json())
            .then((data) => {
                // Extract the image URL from the API response
                const imageUrl = data[0].url;
                petImage.src = imageUrl;
            })
            .catch((error) => {
                console.error("Error fetching cat image: " + error);
            });
            newPetButton.addEventListener("click", fetchRandomPet);
            // fetchRandomCat();
      }
    }

    // Fetch the first pet image when the page loads
    fetchRandomPet();
});


