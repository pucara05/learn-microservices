// server.js en microservicio2
const express = require('express');
const app = express();
const port = 3001; // Asegúrate de usar un puerto diferente al de microservicio1 para evitar conflictos

app.get('/', (req, res) => {
  res.send('Hola, mundo desde microservicio2!');
});

app.listen(port, () => {
  console.log(`Microservicio2 escuchando en http://localhost:${port}`);
});