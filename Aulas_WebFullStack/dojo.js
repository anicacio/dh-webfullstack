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
                notas: [7, 9, 10],
                faltas: 10,
                dataMatricula: "Mon Jan 20 2020"
            }
        ]
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
    const verificarMatriculado = () => {
        if (alunoExistente.length != 0) {
            let boletim = alunoExistente[0].boletim.filter(curso => (curso.nomeCurso == novoCurso));
            return ((boletim.length == 0) ? false : true);
        }
    };
    if (alunoExistente.length != 0) {
        if (!verificarMatriculado()) {
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
        });
        console.log(`${nomeAluno} cadastradx e matriculadx no curso ${novoCurso}!!!`);
    };
};

const checarAprovado = (nomeAluno) => {
    let alunoExistente = alunos.filter(aluno => (aluno.nome == nomeAluno));
    const calcularMedia = () => {
        let soma = curso.notas.reduce((pilha, nota) => {
            return pilha + nota;
        });
        return (soma / curso.notas.length);
    };
    if (alunoExistente.length != 0) {
        console.log(`Aluno: ${alunoExistente[0].nome}`);
        for (curso of alunoExistente[0].boletim) {
            let soma = calcularMedia();
            console.log(`Curso: ${curso.nomeCurso} 
                Nota: ${soma.toFixed(1)}
                Situação: ${(soma.toFixed(1) > 7 && curso.faltas < 3) ? "Aprovado" : "Reprovado"}`);
        }
    } else {
        console.log("Aluno não encontrado!");
    };
};

const adicionarNota = (nomeAluno, nomeCurso, nota) => {
    let alunoExistente = alunos.filter(aluno => (aluno.nome == nomeAluno));
    if (alunoExistente.length != 0) {
        let boletim = alunoExistente[0].boletim.filter(curso => (curso.nomeCurso == nomeCurso));
        boletim[0].notas.push(nota);
        console.log(`Aluno: ${alunoExistente[0].nome}
        Curso: ${boletim[0].nomeCurso}
        Notas: ${boletim[0].notas}
        Nota(${nota}) adicionada com sucesso!`);
    } else {
        console.log("Aluno não encontrado!");
    };
};
// listarAlunos();
// matricularAluno("Daniele de Oliveira Lucas", "Full Stack", "Vila Olimpia"); // Novo Aluno
// matricularAluno("Anderson Nicácio", "Full Stack", "Vila Olimpia"); // Aluno Existente
// checarAprovado("Amanda Andrade"); // Novo Aluno
// checarAprovado("Anderson Nicácio"); // Aluno Existente
// console.log("--------------------------------------");
// adicionarNota("Anderson Nicácio", "Full Stack", 9);
// console.log("--------------------------------------");
// checarAprovado("Anderson Nicácio"); 
// adicionarNota("Michel Santana", "Full Stack", 9);
// buscarAlunoPorNome();