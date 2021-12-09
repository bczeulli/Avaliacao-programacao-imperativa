const { mediaNotas, alunos } = require('./aluno');
let aluno = require ('./aluno')

let curso = {
    nomeDoCurso: "ProgramacaoImperativa" ,
    notaDeAprovacao: 7 ,
    faltasMaximas: 20 ,
    listaDeEstudandes: 5,
}

aluno.novoAluno("guilherme",1,[1,2,3,4]);
console.log(aluno.alunos);

aluno.mediaNotas(alunos)
console.log(aluno.mediaNotas)
