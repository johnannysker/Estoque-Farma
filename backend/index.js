import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js";

const app = express();

mongoose.connect('mongodb://localhost:27017/fullstack_db',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db = mongoose.connection;
const PORT = 5000;
db.on('error', (error) => console.log(error));
db.once('open', () => console.log('>> Banco de dados conectado!'));

app.use(cors());
app.use(express.json());
app.use(UserRoute);

app.listen(PORT, () => console.log('>> O servidor está no ar na porta ' + PORT));