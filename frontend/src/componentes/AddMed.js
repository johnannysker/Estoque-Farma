import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../style.css";

const AddMed = () => {
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");
  const [quantidade, setQtd] = useState("");
  const [validade, setVld] = useState("");
  const navegar = useNavigate();

  const saveMed = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/users", {
        nome,
        preco,
        quantidade,
        validade,
      });
      navegar("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <html>
      <head>
        <title>Estoque de medicamentos</title>
        <meta charset="utf-8"></meta>
        <link rel="stylesheet" href="../style.css" type="text/css" />
      </head>
      <body>
        <header>
          <h1 align="center">Cadastro de Medicamentos</h1>
        </header>
          <div>
            <a href="http://localhost:3000" className="button is-primary mt-5">Estoque de medicamentos</a>
          </div>
        <div className="columns" id="reg">
          <div className="column is-half">
            <form onSubmit={saveMed}>
              <div className="field">
                <label className="Label">Nome</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    placeholder="Nome do medicamento"
                  ></input>
                </div>
              </div>
              <div className="field">
                <label className="Label">Preço</label>
                <div className="control">
                  <input
                    type=""
                    className="input"
                    value={preco}
                    onChange={(e) => setPreco(e.target.value)}
                    placeholder="R$"
                  ></input>
                </div>
              </div>
              <div className="field">
                <label className="Label">Quantidade</label>
                <div className="control">
                  <input
                    type="number"
                    className="input"
                    value={quantidade}
                    onChange={(e) => setQtd(e.target.value)}
                    placeholder="Caixas"
                  ></input>
                </div>
              </div>
              <div className="field">
                <label className="Label">Validade</label>
                <div className="control">
                  <input
                    type="month"
                    className="input"
                    value={validade}
                    onChange={(e) => setVld(e.target.value)}
                    placeholder="Dia/Mês/Ano"
                  ></input>
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <button type="submit" className="button is-success">
                    Salvar
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </body>
    </html>
  );
};

export default AddMed;