window.onload = function() {
  const form = document.querySelector("form");
  form.onsubmit = function(event) {
    event.preventDefault();
    let whereToRegister = document.getElementById("Above-18");
    whereToRegister.setAttribute("class", "hidden")
    let under18Link = document.getElementById("under-18");
    under18Link.setAttribute("class", "hidden");

    const age = parseInt(document.querySelector("input#age").value);

    if (age >= 18) {
      whereToRegister.removeAttribute("class");
    } else {
      under18Link.removeAttribute("class");
    }
  };
};