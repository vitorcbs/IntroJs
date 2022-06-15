//desafio 1
const alunos = [ 
    {
        nome: 'João',
        nota: 5,
        turma: 'B'
},
{
    nome: 'Carlinhos',
    nota: 10,
    turma: 'B'
},
{
    nome: 'Jere',
    nota: 7,
    turma: 'B'
},
]


function approvedStudents (alunos, media) {
    var aboveMedia = []
    for (let i in alunos) {

        const {nota, nome} = alunos[i] //object destructuring 

        if (nota >= media) {
            aboveMedia.push(nome)
        } 
    }

    return aboveMedia
}

console.log(approvedStudents(alunos, 6))

//desafio 2
const pessoa1 = {
        nome: 'João',
        idade: 5,
        turma: 'B'
}
const pessoa2 = {
    nome: 'Carlinhos',
    idade: 10,
    turma: 'B'
}
const pessoa3 = {
    nome: 'Jere',
    idade: 7,
    turma: 'B'
}


function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

console.log(calculaIdade.call(pessoa1, 7))
console.log(calculaIdade.apply(pessoa3, [8]))