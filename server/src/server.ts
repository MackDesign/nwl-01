import express from 'express';
import cors from 'cors';
import path from 'path';
import routes from './routes';
import { errors } from 'celebrate';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(errors());
app.listen(3333);

// ROTA: Endereço completo da requisição
// Recurso: Qual entidade estamos acessando do sistema

//GET: Buscar uma ou mais informações do back-end
//POST: Criar uma nova informação no back-end
//PUT: Atualizar uma informação existente no back-end
//DELETE: Remover uma informação do back-end

// Request Param: Parametros que vem na propria rota que identificam um recurso.
// Query Param: Parâmetros que vem na propria rota geralmente opcionais para filtros, paginação.
// Request Body: Parâmetros para criação/atualização de informações