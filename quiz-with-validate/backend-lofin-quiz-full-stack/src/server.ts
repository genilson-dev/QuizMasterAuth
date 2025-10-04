const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

import cors from 'cors';
import bodyParser from 'body-parser';
import routes from './routes/routes';

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(routes);

app.listen(PORT, () => {
  console.log(`Servidor escutando na porta ${PORT}`);
});
