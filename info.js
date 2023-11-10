const params = new URLSearchParams(window.location.search);
const productId = params.get("_id");
const URL2 = "https://striveschool-api.herokuapp.com/api/product/" + productId;

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
      document.getElementById("name").innerText = singolObj.name;
      console.log(singolObj);
      document.getElementById("brand").innerText = singolObj.brand;
      document.getElementById("description").innerText = singolObj.description;
      document.getElementById("price").innerText = singolObj.price;
    })
    .catch((error) => {
      console.error(
        "Errore durante la richiesta di dettagli del prodotto:",
        error
      );
    });
}
