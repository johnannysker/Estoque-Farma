import "dotenv/config"
import express from "express"
import mongoose from "mongoose";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js";
import nodemailer from "nodemailer"

const app = express();

mongoose.connect(process.env.DATABASE_URL, {                 
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
const PORT = parseInt(process.env.SERVER_PORT);

db.on('error', (error) => console.log(error));
db.once('open', () => console.log('>> Banco de dados conectado!'));

app.use(cors());
app.use(express.json());
app.use(UserRoute);

app.listen(PORT, () => console.log(`>> O servidor está no ar em http://localhost:${PORT}`));

// Usar o site: https://ethereal.email para enviar os emails
const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
        user: "aurelio.considine3@ethereal.email",
        pass: "VAGWPq4JqTZKV4jvwv"
    }
});

transporter.sendMail({
    from: '"Estoque-Farma" <aurelio.considine3@ethereal.email>"',
    to: "joaoarruda@gmail.com",
    subject: "O Estoque-Farma te espera!",
    html: "Olá, seja bem-vindo ao Estoque-Farma! Vamos navegar nessa nova experiência? <a href='http://localhost:3000'>Clique aqui</a> par entrar."
}).then(message => {
    console.log(message);
    console.log(">> Email enviado!");
}).catch(err => {
    console.log(err);
});