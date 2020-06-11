import express, { response } from 'express'; //Código
import cors from 'cors';
import path from 'path'; 
import routes from './routes';
import { errors } from 'celebrate'

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads'))); //servir arquivos estaticos // '..' -> voltar um diretorio

//Para retornar os erros ao frontend
app.use(errors());

app.listen(3333);