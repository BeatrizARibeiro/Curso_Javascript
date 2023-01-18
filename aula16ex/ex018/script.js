var num = document.getElementById('txtn')
var lista = document.getElementById('txtlista')
var res = document.getElementById('res')
var vetor = []

function add(){
    res.innerHTML = ''

    if(num.value.length == 0 || Number(num.value) < 1 || Number(num.value) > 100){
        alert('[ERRO] Valor inválido')
    }
    else{
        var n = Number(num.value)
        var procura = vetor.indexOf(n) //ja tem o numero?
        if(procura == -1){ //não
            //adiciona no vetor
            vetor.push(n)

            //adiciona no select
            var item = document.createElement('option')
            item.text = `Valor ${n} adicionado.`
            lista.appendChild(item)
        }
        else{//sim
            alert('[ERRO] o número já existe')
        }
    }
}

function finalizar(){
    if(vetor.length == 0){
        alert('[ERRO] Adicione valores antes de finalizar')
    }
    else{
        res. innerHTML = ''
        var total = 0
        var maior = 1
        var menor = 100
        var soma = 0
        var media = 0

        for(let c in vetor)
        {
            total = vetor.length

            if(vetor[c] > maior){
                maior = vetor[c]
            }

            if(vetor[c] < menor){
                menor = vetor[c]
            }

            soma += vetor[c]
        }

        media = (soma/total)

        res.innerHTML += ` &#128302; RESULTADO &#128302; <br><br>`;
        res.innerHTML += `Total de valores: ${total}<br>`
        res.innerHTML += `Maior valor: ${maior}<br>`
        res.innerHTML += `Menor valor: ${menor}<br>`
        res.innerHTML += `Soma dos valores: ${soma}<br>`
        res.innerHTML += `Média dos valores: ${media.toFixed(2).replace('.',',')}<br>`
    }
}