import React,{useState, useEffect} from "react";
import axios from "axios";

const MedList = () => {
    const [users, setMed] = useState([]);


    useEffect(() => {
        getMeds();
    }, []);

    const getMeds = async () =>{
        const response = await axios.get('http://localhost:5000/users');
        console.log(response.data); //TODO - aguardando back, tempo do video 35:53
    };

  return (
    <div className="columns">
        <div className="metade">
            <table className="table lista mt-5">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Nome</th>
                        <th>Preço</th>
                        <th>Quantidade</th>
                        <th>Validade</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) =>(
                    <tr key={user._id}>
                        <td>{index + 1}</td>
                        <td>{user.nome}</td>
                        <td>{user.preco}</td>
                        <td>{user.quantidade}</td>
                        <td>{user.validade}</td>
                        <td>
                            <button className="button info">Editar</button>
                        </td>
                    </tr>

                    ))}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default MedList;