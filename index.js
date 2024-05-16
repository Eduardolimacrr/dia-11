let alunos = []
let notas = []
let continuar = true
let contador = 0

while(continuar){
    let nome= prompt("Digite o nome do " + (contador + 1) + "º aluno")
    let nota = parseInt(prompt("Digite a nota do aluno"))
    alunos[contador] = nome
    notas[contador] = nota
    contador++
    let resposta = prompt("Deseja inserir informações sobre outro aluno? (s/n)")
    if (resposta == "n")
        continaur = false
}

console.log("Nota dos alunos: ")
for (let i = 0; i < notas.length; i++){
    console.log(alunos[i] + '-' + notas [i])
}
let somaNotas = 0
for(let i = 0; i < notas.length; i++){
    somaNotas += notas[i]
}
let media = notas / alunos.length
console.log("A soma das notas foi: " + somaNotas)
console.log("A media das notas foi: " + media )