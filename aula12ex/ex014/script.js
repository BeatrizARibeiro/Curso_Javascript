function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()

    if(hora == 1)
    {
        msg.innerHTML = `Agora são <strong>${hora} hora</strong>.`
    }
    else{
        msg.innerHTML = `Agora são <strong>${hora} horas</strong>.`
    }
    

    if(hora >= 0 && hora <=12){
        img.src = 'img/manha.png'
        document.body.style.backgroundColor = '#B67D10'
    }
    else if(hora > 12 && hora < 19){
        img.src = 'img/tarde.png'
        document.body.style.backgroundColor = '#4D3B6F'
    }
    else{
        img.src = 'img/noite.png'
        document.body.style.backgroundColor = '#182B3A'
    }
}

