const express = require("express");
const app = express();
const router = express.Router();
const PetController = require("../controllers/PetController");

router.get("/", PetController.index);
router.get("/add/:nome", PetController.add);

module.exports = router;