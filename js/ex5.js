let ex5 = document.getElementById("ex5");
let enviar = document.getElementById("enviar");

enviar.addEventListener("click", function (e) {
  e.preventDefault();
  let string = document.getElementById("string");
  let value = string.value;

  function reverseString() {
    let result = document.createElement("p");
    let newString = "";

    for (let i = value.length - 1; i >= 0; i--) {
      newString += value[i];
    }
    result.innerText = `${newString}`;
    ex5.appendChild(result);
  }
  reverseString();
});
