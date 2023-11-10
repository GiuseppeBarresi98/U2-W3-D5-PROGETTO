const buttonForm = document.getElementById("button-form");
const form = document.getElementById("my-form");

const inputName = document.getElementById("name");
const inputBrand = document.getElementById("brand");
const inputImage = document.getElementById("image");
const inputPrice = document.getElementById("price");
const inputDescription = document.getElementById("description");

const URL = "https://striveschool-api.herokuapp.com/api/product";

buttonForm.addEventListener("click", function (event) {
  event.preventDefault();

  const addProfileObj = {
    name: inputName.value,
    brand: inputBrand.value,
    description: inputDescription.value,
    price: parseInt(inputPrice.value),
    imageUrl: inputImage.value,
  };
  form.reset();
  alert("prodotto con id");

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

const params = new URLSearchParams(window.location.search);
const productId = params.get("_id");
const URL2 = "https://striveschool-api.herokuapp.com/api/product/" + productId;
console.log(productId);

if (productId) {
  fetch(URL2, {
    method: "GET",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRkZmFhYTk1ZDRmNjAwMTg1NjI1MTQiLCJpYXQiOjE2OTk2MDkyNTksImV4cCI6MTcwMDgxODg1OX0.HLWy5zne_4pU8qZTqpmDdX7Gy33Z4C45PRPlphlkhmk",
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((singolObj) => {
      const { name, description, brand, imageUrl, price } = singolObj;
      document.getElementById("name").value = name;
      document.getElementById("description").value = description;
      document.getElementById("brand").value = brand;
      document.getElementById("image").value = imageUrl;
      document.getElementById("price").value = price;
      const deleteButton = document.createElement("button");
      const bu = document.getElementById("for-butt");
      deleteButton.innerText = "Elimina Prodotto";

      form.appendChild(deleteButton);
      console.log("bu");

      deleteButton.addEventListener("click", function () {
        deleteProduct();
      });
    });
}

function deleteProduct() {
  const deleteURL =
    "https://striveschool-api.herokuapp.com/api/product/" + productId;

  fetch(deleteURL, {
    method: "DELETE",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRkZmFhYTk1ZDRmNjAwMTg1NjI1MTQiLCJpYXQiOjE2OTk2MDkyNTksImV4cCI6MTcwMDgxODg1OX0.HLWy5zne_4pU8qZTqpmDdX7Gy33Z4C45PRPlphlkhmk",
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Errore nella richiesta di eliminazione");
      }
      return response.json();
    })
    .then((deleteObj) => {
      alert("prodotto eliminato con successo");
    })
    .catch((error) => {
      console.error("Errore durante la richiesta di eliminazione:", error);
    });
}
