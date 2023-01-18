let valores = [8, 1, 7, 4, 2, 9, 3]

valores.sort()

/*for(let c = 0; c < valores.length; c++){
    console.log(`A posição ${c} tem o valor ${valores[c]}`)
}*/

for(let c in valores){//para cada posição EM valores faça
    console.log(`A posição ${c} tem o valor ${valores[c]}`)
}

