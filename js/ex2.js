let ex2 = document.getElementById("ex2");
let send = document.getElementById("send");

let lista = document.createElement("ul");
let result = document.createElement("p");
ex2.appendChild(result);
ex2.appendChild(lista);

send.addEventListener("click", function (e) {
  e.preventDefault();
  let numero = document.getElementById("numero");
  let value = numero.value;

  function gerarFibonacci() {
    let soma = 0;
    let anterior = 0;
    let proximo = 1;

    for (let i = 0; i < value; i++) {
      let li = document.createElement("li");
      soma = anterior + proximo;
      anterior = proximo;
      proximo = soma;

      li.innerText = `${anterior}`;

      if (value === li.innerText) {
        result.innerText = `O valor ${value} pertence ao fibonacci`;
      }

      li.style.listStyleType = "none";

      lista.appendChild(li);
    }
  }
  gerarFibonacci();
});
