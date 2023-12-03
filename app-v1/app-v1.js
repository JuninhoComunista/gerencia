const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Esta é a versão 1 da aplicação!');
});

app.listen(3000, () => {
  console.log('App-v1 está rodando na porta 3000!');
});
