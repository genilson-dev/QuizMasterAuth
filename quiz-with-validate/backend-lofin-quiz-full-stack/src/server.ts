import {Request, Response } from 'express';
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

app.get('/teste', (req: Request, res: Response) => {
  res.send('Servidor rodando!');
});

app.listen(PORT, () => {
  console.log(`Servidor escutando na porta ${PORT}`);
});
