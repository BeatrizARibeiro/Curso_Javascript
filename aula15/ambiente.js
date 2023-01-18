let num = [5, 8, 2, 9, 3]
num[5] = 4 //adicionando um valor sabendo o n da posição

num.push(1) //adicionando na ultima posição sem saber qual é

num.sort() //ordem crescente

console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O quinto valor do vetor é ${num[4]}`)

let pos = num.indexOf(4)
if(pos == -1){
    console.log('O valor não foi encontrado!')
}
else{
    console.log(`O valor está na posição ${pos}`)
}
