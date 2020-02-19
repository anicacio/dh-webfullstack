const PetModel = require("../models/Pet")
const PetController = {
    index: (req, res) => {
        res.send(PetModel.listarPets());
    },
    add: (req, res) => {
        res.send(PetModel.adicionarPet());
    },
    show: (req, res) => {
        res.send(PetModel.buscarPet());
    }
};

module.exports = PetController;