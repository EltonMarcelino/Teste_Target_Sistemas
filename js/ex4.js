function percentual() {
  let div = document.getElementById("ex4");
  let ul = document.createElement("ul");

  let li1 = document.createElement("li");
  let li2 = document.createElement("li");
  let li3 = document.createElement("li");
  let li4 = document.createElement("li");
  let li5 = document.createElement("li");

  ul.id = "cidades";
  li1.id = "sp";
  li2.id = "rj";
  li3.id = "mg";
  li4.id = "es";
  li5.id = "outros";

  div.appendChild(ul);
  ul.appendChild(li1);
  ul.appendChild(li2);
  ul.appendChild(li3);
  ul.appendChild(li4);
  ul.appendChild(li5);

  let Sp = 67836.43;
  let Rj = 36678.66;
  let Mg = 29229.88;
  let Es = 27165.48;
  let Outros = 19849.53;

  let SpPorcento = Sp / 100;
  let RjPorcento = Rj / 100;
  let MgPorcento = Mg / 100;
  let ESPorcento = Es / 100;
  let OutrosPorcento = Outros / 100;

  li1.innerText = `O percentual de SP é ${SpPorcento}%`;
  li2.innerText = `O percentual de RJ é ${RjPorcento}%`;
  li3.innerText = `O percentual de MG é ${MgPorcento}%`;
  li4.innerText = `O percentual de ES é ${ESPorcento}%`;
  li5.innerText = `O percentual de OUTROS é ${OutrosPorcento}%`;
}
percentual();
