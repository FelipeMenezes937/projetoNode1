const express = require("express");
const app = express();
const Port = 5001;

const contatos = ["Thor", "viuvva negra", "Homem de ferro", "capitão america"]

app.get("/", (req, res)=>{
    res.send("hello word!!!")
})
app.get("/test", (req, res)=>{
    res.send("teste")
})
app.get("/perfil", (req, res)=>{
    res.send("perfil")
})
app.get("/sobre", (req, res)=>{
    res.send("sobre")
})
app.get("/contato", (req, res)=>{
    res.json(contatos)
})



app.listen(Port, () =>{ 
    console.log(`servidor rodando na porta ${Port}`)
})