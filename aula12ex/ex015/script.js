function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if(fano.value.length == 0 || Number(fano.value) > ano){
        alert('[ERRO] Verifique os dados e tente novamente!')
    }
    else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(fsex[0].checked){
            genero = 'Homem'

            if(idade >= 0 && idade < 12){
                //crianca
                img.setAttribute('src', 'img/menino.png')
            }
            else if(idade < 25){
                //jovem
                img.setAttribute('src', 'img/garoto.png')
            }
            else if(idade < 50){
                //adulto
                img.setAttribute('src', 'img/adulto.png')
            }
            else{
                //idoso
                img.setAttribute('src', 'img/idoso.png')
            }
        }
        else if(fsex[1].checked){
            genero = 'Mulher'

            if(idade >= 0 && idade < 12){
                //crianca
                img.setAttribute('src', 'img/menina.png')
            }
            else if(idade < 25){
                //jovem
                img.setAttribute('src', 'img/garota.png')
            }
            else if(idade < 50){
                //adulto
                img.setAttribute('src', 'img/adulta.png')
            }
            else{
                //idoso
                img.setAttribute('src', 'img/idosa.png')
            }
        }

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}