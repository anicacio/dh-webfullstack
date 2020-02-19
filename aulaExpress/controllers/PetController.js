const PetModel = require("../models/Pet")
const PetController = {
    index: (req, res) => {
        res.send("Paginal Inicial");
    },
    add: (req, res) => {
        res.send("Adicionar pet");
    },
    show: (req, res) => {
        res.send("Exibe um pet especifico");
    }
};

module.exports = PetController;