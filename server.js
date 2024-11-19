import express from "express";

const app = express();
app.listen(3000, () => {
  console.log("Servidor escutando...");
}); // servidor local criado

app.get("/api", (req, res) => {
  res.status(200).send("Boas Vindos à imersão!");
}); // criando rota
