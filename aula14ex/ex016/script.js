function contar(){
    var txti = window.document.getElementById('txtini');
    var txtf = window.document.getElementById('txtfim')
    var txtp = document.getElementById('txtpas')
    var res = document.getElementById('res')
    

    if(txti.value.length == 0 || txtf.value.length == 0 || txtp.value.length == 0){
        alert('[ERRO] Faltam dados!')
    }
    
    else{
        var i = Number(txti.value)
        var f = Number(txtf.value)
        var p = Number(txtp.value)    
        var cont;

        res.innerHTML = `Contando: <br>` 
        if(i < f){
            for(cont = i; cont <= f; cont+=p){
                res.innerHTML += `${cont} &#128073; `;
            }
            res.innerHTML += ` &#127812; `;
        }

        else{
            for(cont = i; cont >= f; cont-=p){
                res.innerHTML += `${cont} &#128073; `;
            }
            res.innerHTML += ` &#127812; `;
        }
        
    }
}
    