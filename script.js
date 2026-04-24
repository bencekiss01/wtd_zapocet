const images = document.querySelectorAll(".gallery-image");

images.forEach(function(image) {
  image.addEventListener("click", function() {
    window.open(image.src, "_blank");
  });
});

const form = document.getElementById("registration-form");

if(form) {
  form.addEventListener("submit", function(event) {
    event.preventDefault();

    document.getElementById("error-name").textContent = "";
    document.getElementById("error-email").textContent = "";
    document.getElementById("error-age").textContent = "";
    document.getElementById("error-gender").textContent = "";
    document.getElementById("error-message").textContent = "";
    document.getElementById("error-terms").textContent = "";
    document.getElementById("result").textContent = "";

    let isValid = true;

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const age = document.getElementById("age").value.trim();
    const gender = document.querySelector('input[name="gender"]:checked');
    const message = document.getElementById("message").value.trim();
    const terms = document.getElementById("terms").checked;

    if(name === "") {
      document.getElementById("error-name").textContent = "Meno je povinné!";
      isValid = false;
    }
    
    if(email === "") {
    document.getElementById("error-email").textContent = "Mail je povinný!";
      isValid = false;
    }
    
    if(age === "" ||age < 1 || age > 120) {
      document.getElementById("error-age").textContent = "Vek musí byť medzi 1 a 120!";
      isValid = false;
    }
    
    if(!gender) {
      document.getElementById("error-gender").textContent = "Vybrať pohlavie!";
      isValid = false;
    }
    
    if(!terms) {
      document.getElementById("error-terms").textContent = "Podmienky používania je povinné!";
      isValid = false;
    }

    if(isValid) {
      document.getElementById("result").textContent = "Formulár bol úspešne odoslaný!";
      form.reset();
    }
  });
}

document.addEventListener("DOMContentLoaded", function() {
  const tablebody = document.getElementById("data-table-body");

  if (tablebody) {
    fetch("data.json")
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      data.bikes.forEach(function(bike) {
        const row = document.createElement("tr");

        const brandCell = document.createElement("td");
        brandCell.textContent = bike.brand;

        const modelCell = document.createElement("td");
        modelCell.textContent = bike.model;

        const typeCell = document.createElement("td");
        typeCell.textContent = bike.type;

        const priceCell = document.createElement("td");
        priceCell.textContent = bike.price;

        row.appendChild(brandCell);
        row.appendChild(modelCell);
        row.appendChild(typeCell);
        row.appendChild(priceCell);

        tableBody.appendChild(row)
      });
    })
    .catch(function(error) {
      console.log("Chyba pri načítaní JSON:", error);
    });
  }
});








