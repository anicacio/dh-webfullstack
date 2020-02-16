const express = require('express');
const app = express();

let serie = ["1", "2", "3", "4"]
app.get('/serie/:id', (req, res) => {
    let idSerie = req.params.id - 1;
    res.send(serie[idSerie]);
});

app.listen(3000);