import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import usersRoute from './routes/users.js';
import chatRoute from './routes/chat.js';

const app = express();
const port = 5001;

app.use(cors());
app.use(bodyParser.json());
app.use("/usuarios", usersRoute);
app.use("/chat", chatRoute);

app.get('/', (req, res) => {
    res.send("API Conectada");
});

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));