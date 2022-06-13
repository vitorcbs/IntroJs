var Carlinhos = {nome:'Carlinhos', altura: 165, eGay: true, array: ['array'] ,  orgaoGenital: {tamanhoDeRola: 160}}

console.log(Carlinhos)

console.log("A rola do cara mede " + Carlinhos.orgaoGenital.tamanhoDeRola + " cm")

var nome = Carlinhos.nome

console.log(nome)

var {nome, altura, eGay} = Carlinhos
console.log(nome, altura, eGay)