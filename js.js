const buttonForm = document.getElementById("button-form");
const form = document.getElementById("my-form");

const inputName = document.getElementById("name");
const inputBrand = document.getElementById("brand");
const inputImage = document.getElementById("image");
const inputPrice = document.getElementById("price");
const inputDescription = document.getElementById("description");

const URL = "https://striveschool-api.herokuapp.com/api/product";

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const addProfileObj = {
    name: inputName.value,
    brand: inputBrand.value,
    description: inputDescription.value,
    price: parseInt(inputPrice.value),
    imageUrl: inputImage.value,
  };
  form.reset();

  fetch(URL, {
    method: "POST",
    body: JSON.stringify(addProfileObj),
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRkZmFhYTk1ZDRmNjAwMTg1NjI1MTQiLCJpYXQiOjE2OTk2MDkyNTksImV4cCI6MTcwMDgxODg1OX0.HLWy5zne_4pU8qZTqpmDdX7Gy33Z4C45PRPlphlkhmk",
      "Content-Type": "application/json",
    },
  })
    .then((resp) => {
      if (!resp.ok) {
        console.log(resp);
        throw new Error("Errore nella richiesta");
      }
      return resp.json();
    })
    .then((createObj) => {
      console.log(createObj);
    })
    .catch((error) => {
      console.error("Errore di fetch:", error);
    });
});
