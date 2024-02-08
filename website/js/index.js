const counter = document.querySelector(".counter-number");

// Function to update counter
async function updateCounter() {
    let response = await fetch("https://2klzopq5rz3444gcis3bekmjsq0egsyy.lambda-url.us-east-1.on.aws/");
    let data = await response.json();
    counter.innerHTML = ` This page has ${data} Views!`;
}

// Event listener for the link
document.querySelector("images/Sergey_Antonyukov_CV_en.pdf").addEventListener("click", updateCounter);
