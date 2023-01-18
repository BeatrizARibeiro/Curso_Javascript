function tabuada(){
    var txtn = document.getElementById('txtnum')
    var tab = document.getElementById('txtres')
    
    if(txtn.value.length == 0){
        alert('Não existe tabuada de nada né fio(a)!')
    }
    else{
        var num = Number(txtn.value)
        var i

        tab.innerHTML = ''

        for(i = 1; i <= 10; i++){
            var item = document.createElement('option')
            item.text = `${num} x ${i} = ${num*i}`
            item.value = `tab${i}`
            tab.appendChild(item)

           // res.innerHTML += `${num} x ${i} = ${tab} \n`
        }
    }

}