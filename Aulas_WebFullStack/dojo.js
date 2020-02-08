const escola = "Digital House";

let alunos = [{
        nome: "Anderson Nicácio",
        boletim: [{
            nomeCurso: "Full Stack",
            campus: "Vila Olimpia",
            notas: [8, 9, 7],
            faltas: 0,
            dataMatricula: "Mon Jan 20 2020"
        },
        {
            nomeCurso: "DevOps",
            campus: "Vila Olimpia",
            notas: [8, 9, 7],
            faltas: 0,
            dataMatricula: "Mon Jan 20 2020"
        }]
    },
    {
        nome: "Andressa Fazam",
        boletim: [{
            nomeCurso: "Full Stack",
            campus: "Vila Olimpia",
            notas: [8, 10, 7],
            faltas: 1,
            dataMatricula: "Mon Jan 20 2020"
        }]
    },
    {
        nome: "Anderson Ricardo",
        boletim: [{
            nomeCurso: "Full Stack",
            campus: "Vila Olimpia",
            notas: [7, 7, 6],
            faltas: 5,
            dataMatricula: "Mon Jan 20 2020"
        }]
    }
];

const listarAlunos = () => {
    for (aluno of alunos) {
        console.log(`Nome: ${aluno.nome}`);
        for (boletim of aluno.boletim) {
            console.log(`
            Curso: ${boletim.nomeCurso}
            Notas: ${boletim.notas}
            Faltas: ${boletim.faltas}
            Data da Matricula: ${boletim.dataMatricula}
           `)
        }
    }
};

const matricularAluno = (nomeAluno, novoCurso, campus) => {
    let alunoExistente = alunos.filter(aluno => (aluno.nome == nomeAluno));
    const verificarMatriculado = () =>{
        if(alunoExistente.length != 0){
            let boletim = alunoExistente[0].boletim.filter(curso => (curso.nomeCurso == novoCurso));
            return ((boletim.length == 0) ? false : true);
        }
    };
    if(alunoExistente.length != 0){
        console.log(alunoExistente.length)
        if(!verificarMatriculado()){
            alunoExistente[0].boletim.push({
                nomeCurso: novoCurso,
                campus: campus,
                notas: [],
                faltas: 0,
                dataMatricula: new Date().toDateString()
            })
            console.log(`${nomeAluno} foi matriculadx no curso ${novoCurso}!!!`);
        } else {
            console.log(`${nomeAluno} já está matriculadx no curso ${novoCurso}!!!`);
        };
    } else {
        alunos.push({
            nome: nomeAluno,
            boletim: [{
                nomeCurso: novoCurso,
                campus: campus,
                notas: [],
                faltas: 0,
                dataMatricula: new Date().toDateString()
            }]
        })
        console.log(`${nomeAluno} cadastradx e matriculadx no curso ${novoCurso}!!!`)
    }

};

// matricularAluno("Daniele de Oliveira Lucas", "Full Stack", "Vila Olimpia");
matricularAluno("Anderson Nicácio", "Full Stack", "Vila Olimpia");



// console.log(alunos);
// listarAlunos();
// calcularMedia();
// adicionarNota();
// buscarAlunoPorNome();
// checarAprovado();
// matricularAluno("Anderson Nicácio", "Full Stack");