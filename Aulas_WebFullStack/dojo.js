const escola = "Digital House";

let alunos = [{
        nome: "Anderson Nicácio",
        boletim: [{
            nomeCurso: "Full Stack",
            notas: [8, 9, 7],
            faltas: 0,
            dataMatricula: "2020-01-22"
        }]
    },
    {
        nome: "Andressa Fazam",
        boletim: [{
            nomeCurso: "Full Stack",
            notas: [8, 10, 7],
            faltas: 1,
            dataMatricula: "2020-01-20"
        }]
    },
    {
        nome: "Anderson Ricardo",
        boletim: [{
            nomeCurso: "Full Stack",
            notas: [7, 7, 6],
            faltas: 5,
            dataMatricula: "2020-01-21"
        }]
    }
];

const listarAlunos = () => {
    // alunos.forEach(aluno => {
    //     console.log(`
    //     Nome: ${aluno.nome}`);
    //     aluno.boletim.forEach(boletim => {
    //         console.log(`
    //             Curso: ${boletim.nomeCurso}
    //             Notas: ${boletim.notas}
    //             Faltas: ${boletim.faltas}
    //             Data da Matricula: ${boletim.dataMatricula}
    //         `)
    //     })
    // });
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
listarAlunos();
// calcularMedia();
// adicionarNota();
// buscarAlunoPorNome();
// checarAprovado();
// matricularAluno("Anderson Nicácio", "Full Stack");