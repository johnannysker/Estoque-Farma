import "dotenv/config" 
import express from "express"
import mongoose from "mongoose";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js";

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