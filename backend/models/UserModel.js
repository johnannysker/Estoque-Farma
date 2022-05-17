import mongoose from "mongoose";

const User = mongoose.Schema({
    nome:{
        type: String,
        required: true
    },
    preco:{
        type: String,
        required: true
    },
    quantidade:{
        type: int,
        required: true
    },
    validade:{ 
        type: String, 
        required: true 
    }
});

export default mongoose.model('Users', User);