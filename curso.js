let alunos = require ('./aluno')

function Curso(nomeDoCurso, notaDeAprovacao, faltasMaximas) {
    this.nomeDoCurso = nomeDoCurso ;
    this.notaDeAprovacao = notaDeAprovacao ;
    this.faltasMaximas = faltasMaximas ;
    this.listaDeEstudantes = alunos.listaAlunos ;

    this.adicionarAluno = function (nome, faltas, notas) {
        const novoAluno = alunos.novoAluno(nome, faltas, notas);
        return this.listaDeEstudantes.push(novoAluno) ;
    }

    this.aprovarAluno = function (alunoAvaliado) {
        let aprovado
        if (alunoAvaliado.media() >= this.notaDeAprovacao && alunoAvaliado.qtdDeFaltas < this.faltasMaximas) {
            
            return aprovado = true
        } else if (alunoAvaliado.media() >= (this.notaDeAprovacao + (this.notaDeAprovacao * 0.1)) && alunoAvaliado.qtdDeFaltas == this.faltasMaximas) {
            
            return aprovado = true
        } else {
            return aprovado = false
        }
    }
    
                
    

    this.alunosAprovados = function () {
        
        let listaAlunosAprovados = []

        for(let i = 0; i < this.listaDeEstudantes.length; i++){
        listaAlunosAprovados.push(this.aprovarAluno(this.listaDeEstudantes[i]))
        
        }
        console.log(listaAlunosAprovados)
    }
    





}



let prog = new Curso("prog", 7, 20)

prog.adicionarAluno("Henrique", 9, [2,5,3,6]);

prog.alunosAprovados()
