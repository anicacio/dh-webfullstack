const escola = "Digital House";

let alunos = [{
        nome: "Anderson Nicácio",
        boletim: [{
            nomeCurso: "Full Stack",
            notas: [8, 9, 7],
            faltas: 0,
            dataMatricula: 20200122
        }]
    },
    {
        nome: "Andressa Fazam",
        boletim: [{
            nomeCurso: "Full Stack",
            notas: [8, 10, 7],
            faltas: 1,
            dataMatricula: 20200120
        }]
    },
    {
        nome: "Anderson Ricardo",
        boletim: [{
            nomeCurso: "Full Stack",
            notas: [7, 7, 6],
            faltas: 5,
            dataMatricula: 20200121
        }]
    }
];

const listarAlunos = () => {
    alunos.forEach(aluno => {
        console.log(alunos);
    });
};

const matricularAluno = (nomeAluno, novoCurso) => {
    let alunoExistente = alunos.filter(aluno => (aluno.nome == nomeAluno));
    console.log(alunoExistente);

    const verificarJaMatriculado = () => {
        for (aluno of alunoExistente) {
            for (curso of aluno.boletim) {
                return curso.nomeCurso == novoCurso;
            };
        };
    };

    const adicionarAluno = () => {
        alunos.push({
            nome: nomeAluno,
            boletim: []
        })
    };

    const adicionarCurso = () => {

    };

    if (!verificarJaMatriculado()) {
        adicionarAluno();

    };
};

// console.log(alunos);
// listarAlunos();
// calcularMedia();
// adicionarNota();
// buscarAlunoPorNome();
// checarAprovado();
// matricularAluno("Anderson Nicácio", "Full Stack");