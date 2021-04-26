const { query } = require("express");
const fs = require("fs");
const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/html/index.html");
});

app.get("/aluno", (req, res) => {
  res.sendFile(__dirname + "/public/html/aluno.html");
});

app.get("/duvida", (req, res) => {
  res.sendFile(__dirname + "/public/html/duvida.html");
});

app.get("/eu", (req, res) => {
  res.sendFile(__dirname + "/public/html/eu.html");
});

app.get("/confirmacao", (req, res) => {
  let name = req.query.nome;
  let email = req.query.email;
  let tel = req.query.telefone;
  let msg = req.query.mensagem;

  res.send(`
    <p>
    Olá, a dúvida "${msg}" foi recebida.<br>
     Retornaremos no e-mail ✖ ${email} <br>
    <a href="/">
        ↣Clique aqui para voltar a tela inicial↢ 
    </a>
    </p>
    `);
});

app.get("/jasonalunos", (req, res) => {
  const mandioca = req.query.mandioca;
  let newJson = [];
  fs.readFile(__dirname + "/alunos.json", "utf8", (err, data) => {
    const alunos = JSON.parse(data);
    for (i in alunos) {
      if (alunos[i].nome.toLowerCase().includes(mandioca)) {
        newJson.push(alunos[i]);
      }
    }
    return res.json(newJson);
  });
});

app.listen(3000, () => {
  console.log("Server aberto em: http://localhost:3000");
});
