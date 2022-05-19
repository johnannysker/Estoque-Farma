import React, { useState, useEffect } from "react";
import axios from "axios";
import "../style.css";
import {Link} from "react-router-dom";

const MedList = () => {
  const [users, setMed] = useState([]);

  useEffect(() => {
    getMeds();
  }, []);

  const getMeds = async () => {
    const response = await axios.get("http://localhost:5000/users");
    setMed(response.data);
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/users/${id}`);
      getMeds();
    }catch (error){
      console.log(error);
    }
  }

  return (
    <html>
      <head>
        <title>Estoque de medicamentos</title>
        <meta charset="utf-8"></meta>
        <link rel="stylesheet" href="../style.css" type="text/css" />
      </head>
      <body>
        <header>
          <h1 align="center">Estoque da Farmácia</h1>
          <div id="menu">
            <a href="http://localhost:3000/add">Cadastrar Medicamento</a>
          </div>
        </header>
              
            <table className="table is-striped is-fullwidth hmt-5" id="table">
                <thead>
                    <tr>
                    <th>No</th>
                    <th>Nome</th>
                    <th>Preço</th>
                    <th>Qtd Cx</th>
                    <th>Validade</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                    <tr key={user._id}>
                        <td>{index + 1}</td>
                        <td>{user.nome}</td>
                        <td>{user.preco}</td>
                        <td>{user.quantidade}</td>
                        <td>{user.validade}</td>
                        <td>
                        <Link to={`edit/${user._id}`}className="button is-info is-small">Editar</Link>
                        <button onClick={() => deleteUser(user._id)} class="button is-danger is-small">Delete</button>
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
      </body>
    </html>
  );
};

export default MedList;
