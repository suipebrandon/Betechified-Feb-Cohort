require("dotenv").config();

const express = require("express")
const app = express();

app.use(express.json()); //middleware JSON parsing

// Custom logging middleware
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});
 
// GET /
app.get("/", (req, res) => {
    res.send("My Week 2 API!");
});

//POST /user
app.post("/user", (req, res) => {
    const { name, email} = req.body;

    if ( !name || !email ) {
        return res.status(400).json({ error: "Missing Fields" });
    }
    res.send(`Hello, ${name}`);
});

//Get /user/:id
app.get("/user/:id", (req, res) => {
    const id = req.params.id;
    res.send(`User ${id} profile`);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
console.log(`API live port: ${PORT}`);
});
