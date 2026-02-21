const express = require('express');
const app = express();
const port = 3000;

app.use(express.json()); // parses json bodies automatically

app.get('/user/:id', (req, res) => {
    const id = req.params.id;
    console.log(id);
    res.send(id);
});

app.get("/search", (req, res) => {
    const id = req.query;
    console.log(id)
    res.send(id);
});

app.listen(port, () => {
    console.log('Example app listening on ${port}');
});