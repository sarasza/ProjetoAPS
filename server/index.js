const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "T@ylor13",
    database: "crud",
});

/*app.get("/", (req, res) => {
    let SQL = "INSERT INTO areascomuns (nome, descricao, horario_abertura, horario_fechamento) VALUES ( 'sinuca', 'sinuca jogo', '10:00:00', '21:00:00')";

    db.query(SQL, (err, result) => {
        console.log(err);
    })
});*/

app.use(cors());
app.use(express.json());

app.post("/register", (req, res) => {
    const { nome } = req.body;
    const { descricao } = req.body;
    const { horario_abertura } = req.body;
    const { horario_fechamento } = req.body;

    let SQL = "INSERT INTO areascomuns (nome, descricao, horario_abertura, horario_fechamento) VALUES (?, ?, ?, ?)";

    db.query(SQL, [nome, descricao, horario_abertura, horario_fechamento], (err, result) => {
        console.log(err)
    });
});

app.get("/getCards", (req, res) => {
    let SQL = "SELECT * from areascomuns";

    db.query(SQL, (err, result) => {
        if(err) console.log(err)
        else res.send(result);
    });
});

app.put("/edit", (req, res) => {
    const { id } = req.body;
    const { nome } = req.body;
    const { descricao } = req.body;
    const { horario_abertura } = req.body;
    const { horario_fechamento } = req.body;

    let SQL = "UPDATE areascomuns SET nome = ?, descricao = ?, horario_abertura = ?, horario_fechamento = ? WHERE id = ?";

    db.query(SQL, [nome, descricao, horario_abertura, horario_fechamento, id], (err, result) => {
        if (err) console.log(err);
        else res.send(result);
    });
});

app.delete("/delete/:id", (req, res) => {
    const { id } = req.params;
    let SQL = "DELETE FROM areascomuns WHERE id = ?";

    db.query(SQL, [id], (err, result) => {
        if (err) console.log(err);
        else res.send(result);
    })
})

app.listen(3001, () => {
    console.log("rodando servidor")
})