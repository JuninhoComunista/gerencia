const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Esta é a versão 2 da aplicação!');
});

app.listen(3001, () => {
  console.log('App-v2 está rodando na porta 3001!');
});
