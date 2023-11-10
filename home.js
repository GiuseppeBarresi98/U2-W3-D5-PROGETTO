window.onload = () => {
  const URL = "https://striveschool-api.herokuapp.com/api/product";
  fetch(URL, {
    method: "GET",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRkZmFhYTk1ZDRmNjAwMTg1NjI1MTQiLCJpYXQiOjE2OTk2MDkyNTksImV4cCI6MTcwMDgxODg1OX0.HLWy5zne_4pU8qZTqpmDdX7Gy33Z4C45PRPlphlkhmk",
      "Content-Type": "application/json",
    },
  })
    .then((resp) => resp.json())
    .then((productObj) => {
      console.log(productObj);
      const main = document.getElementById("main");
      productObj.forEach((product) => {
        const row = document.getElementById("row");
        const div = document.createElement("div");
        div.className = "col-12 col-sm-6 col-md-4 col-lg-3 mt-2";
        const cardDiv = document.createElement("div");
        cardDiv.className = "card h-100 rounded";
        const img = document.createElement("img");
        img.className =
          "card-img-top w-100 object-fit-cover rounded shadow-sm p-3 w-25";
        img.src = product.imageUrl;
        const cardBody = document.createElement("div");
        cardBody.className = "card-body my-auto";
        const h5 = document.createElement("h5");
        h5.innerText = product.name;
        h5.className = "card-title";
        const p = document.createElement("p");
        p.innerText = product.description + " - Prezzo: $" + product.price;
        p.className = "card-text";
        const a = document.createElement("a");
        a.className = "btn btn-primary";
        a.innerText = "Modifica";
        a.href = "backoffice.html?_id=" + product._id;
        info = document.createElement("a");
        info.innerText = "Scopri di piu";
        info.className = "btn btn-dark mx-2";
        info.href = "info.html?_id" + product._id;

        row.appendChild(div);
        div.appendChild(cardDiv);
        cardDiv.appendChild(img);
        cardDiv.appendChild(cardBody);
        cardBody.appendChild(h5);
        cardBody.appendChild(p);
        cardBody.appendChild(a);
        cardBody.appendChild(info);
      });
    })
    .catch((error) => {
      console.error("Errore durante la richiesta fetch:", error);
    });
};
