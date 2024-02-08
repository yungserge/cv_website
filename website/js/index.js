const counter = document.querySelector(".counter-number");
async function updateCounter() {
    let response = await fetch("https://2klzopq5rz3444gcis3bekmjsq0egsyy.lambda-url.us-east-1.on.aws/", {
        mode: 'cors',
        headers: {
            'Origin': 'https://yungserge.com' // Replace with your actual origin
        }
      });
    let data = await response.json();
    counter.innerHTML = ` This page has ${data} Views!`;
}

updateCounter();