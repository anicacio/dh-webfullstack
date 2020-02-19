const PetModel = require("../models/Pet")
const PetController = {
    index: (req, res) => {
        res.send(PetModel.listarPets());
    },
    add: (req, res) => {
        let novoPet = req.params;
        PetModel.adicionarPet(novoPet);
        res.send(`${novoPet.nome} foi adicionado`);
    },
    show: (req, res) => {
        res.send(PetModel.buscarPet());
    }
};

module.exports = PetController;