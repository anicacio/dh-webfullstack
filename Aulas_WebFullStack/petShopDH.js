// Projeto PetShop
const PETSHOP = "Petshop DH";

console.log(`   ** ${PETSHOP} **    `);

let pets = [{
    nome: "Fred",
    raca: "vira-lata",
    idade: 17,
    genero: "M",
    servicos: [],
    tipo: "gato",
    vacinado: false,
},{
    nome: "Capivara",
    raca: "vira-lata",
    idade: 12,
    genero: "M",
    servicos: ["banho", "tosa", "vacinação"],
    tipo: "gato",
    vacinado: true,
},{
    nome: "Tripé",
    raca: "angora",
    idade: 15,
    genero: "F",
    servicos: [],
    tipo: "gato",
    vacinado: false,
},{
    nome: "Sóopó",
    raca: "siames",
    idade: 99,
    genero: "F",
    servicos: ["banho", "tosa", "vacinação"],
    tipo: "gato",
    vacinado: false,
}]

const anoDeNascimento = pet => 2020 - pet.idade;

const listarPets = () => {
    for(let pet of pets){
        console.log(`
        Nome: ${pet.nome}
        Raça: ${pet.raca}
        Idade: ${pet.idade}
        Genero: ${(pet.genero == "F" ? "Femea" : "Macho")}
        Serviços: ${pet.servicos}
        Tipo: ${pet.tipo}
        Vacinado: ${(pet.vacinado == true ? "Sim" : "Não")}
        ----------------------------------------`);
    };
};

const adicionarPet = pet => {
    if(typeof pet == "object" && validarDados(pet)){
        pet.nome = pet.nome.toString();
        pet.idade = parseInt(pet.idade);
        (!pet.servicos) ? pet.servicos = [] : "";
        pets.push(pet);
        console.log(`${pets[pets.length - 1].nome} adicionado na lista!!`)        
    }else{
        console.log("Ops, insira um objeto válido!")
    };
};

const validarDados = pet => {
    return (
        pet.nome != "" &&
        pet.idade != "" &&
        pet.genero != "" &&
        pet.tipo != "" &&
        pet.raca != "" 
    )
};

const tosarPet = pet => {
    pet.servicos.push('tosa');
    console.log(`${pet.nome} está tosado!`);
};

const darBanhoPet = pet => {
    pet.servicos.push('banho');
    console.log(`${pet.nome} está de banho tomado!`);
};

const cortarUnhasPet = pet => {
    pet.servicos.push('corte de unha');
    console.log(`${pet.nome} está com as unhas cortadas!`);
};

let spot = {
    nome: "Spot",
    raca: "vira-lata",
    idade: 3,
    genero: "M",
    servicos: [],
    tipo: "gato",
    vacinado: true
};

const atenderPet = (pet,...servicos) => {
    console.log(`Bem vindo, ${pet.nome}!`);
    for(let servico of servicos){
        servico(pet);
    };
    const pagar = () => {
        console.log('Pagamento realizado com successo!');
    };
    pagar();
    console.log('Volte sempre!');
};

const vacinarPet = pet => {
    if(pet.vacinado){
        console.log(`${pet.nome} já está vacinado!`);
    }else{
        pet.vacinado = true;
        console.log(`${pet.nome} vacinado com sucesso!`);
    };
};

const contarVacinados = pets => {
    let vacinados = pets.filter(pet => pet.vacinado).length;
    let naoVacinados = pets.filter(pet => !pet.vacinado).length;
    console.log(`
    Foram encontrados ${naoVacinados} pets não vacinados
    Foram encontrados ${vacinados} pets vacinados`);
};

const campanhaVacina = pets => {
    let naoVacinados = 0;
    for(let pet of pets){
        (!pet.vacinado) ? (naoVacinados++, vacinarPet(pet)):"";
    };
    console.log(`${naoVacinados} pets foram vacinados nessa campanha!`);
};


const buscarPetPorNome = nome => {
    let resultadoBuscaPorNome = pets.filter(pet => (pet.nome = nome));
    console.log(resultadoBuscaPorNome);
}

// campanhaVacina(pets);
// atenderPet(spot, darBanhoPet, tosarPet, cortarUnhasPet);
// listarPets();
// contarVacinados(pets);
// adicionarPet(spot);
// console.log(validarDados(spot));
buscarPetPorNome("Tripé");