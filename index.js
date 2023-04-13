let body = document.querySelector("body")

let div = document.createElement("div")
let menorId = document.createElement("p")
let maiorId = document.createElement("p")  
let mediaId = document.createElement("p")

body.appendChild(div)
div.appendChild(menorId)
div.appendChild(maiorId)
div.appendChild(mediaId)

let menor = 0
let maior = 0
let media = 0
let somaMedia = 0
let dias = 0
let totalDias = 0
fetch("dados.json").then((response)=>{
    response.json().then((diariamente)=>{
        
        diariamente.map((elemento)=>{
            let valor = elemento.valor
            let dia = elemento.dia
            if(menor > valor){
                menor = valor
            }
            if(maior < valor){
                maior = valor
            }

            media = media + valor
            if(dias < dia ){
                dias = dia
            }

            somaMedia = media/dias
        if(somaMedia < valor){
            totalDias++
        }



            
        })
        


        

        menorId.innerText = `O menor valor de faturamento ocorrido em um dia do mês:${menor}`
        maiorId.innerText = document.innerText = `O maior valor de faturamento ocorrido em um dia do mês:${maior}`
        mediaId.innerText = document.innertext =`O total acima da media:${totalDias}`  

      


    })
})



        

