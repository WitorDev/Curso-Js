let valores = [8, 1, 7, 4, 2, 9]

valores.sort()

console.log('Veja abaixo as posições do Vetor')

/*
for(let pos=0; pos<valores.length; pos++){
    valores.sort()
    console.log(`A posição ${pos} é ${valores[pos]}`)
}
*/

for(let pos in valores){
    console.log(`A posição ${pos} é ${valores[pos]}`)
}