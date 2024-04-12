import React, { useState, useEffect } from "react"
import './App.css';
import Axios from "axios";
import Card from "./components/cards/card.js";
import Logo from "../src/reservaCondo.png";


function App() {
  const [values, setValues] = useState();
  const [listAreas, setListAreas] = useState();

  const handleChangeValues = (value) => {
    setValues(prevValue=>({
      ...prevValue,
      [value.target.name] : value.target.value,
    }))
  }

  const handleClickButton = () => {
    Axios.post("http://localhost:3001/register", {
      nome: values.nome,
      descricao: values.descricao,
      horario_abertura: values.horario_abertura,
      horario_fechamento: values.horario_fechamento,
    }).then((response) => {
      console.log(response);
    })
  }

  useEffect(() => {
    Axios.get("http://localhost:3001/getCards").then((response) => {
      setListAreas(response.data);
    })
  }, [])

  return (
    <div className="app--container">
      <div className="register--container">
        <img src={Logo} alt="Logo do sistema" title="Logo do sistema" style={{ width: '200px' }} />
        <br></br>
        <input type="text" name="nome" placeholder="Nome" className="register--input" onChange={handleChangeValues} />
        <input type="text" name="descricao" placeholder="Descrição" className="register--input" onChange={handleChangeValues} />
        <input type="text" name="horario_abertura" placeholder="Horário de Abertura" className="register--input" onChange={handleChangeValues} />
        <input type="text" name="horario_fechamento" placeholder="Horário de Fechamento" className="register--input" onChange={handleChangeValues} />
        <button className="register--button" onClick={() => handleClickButton()}>Cadastrar</button>
      </div>

    { typeof listAreas !== "undefined" && listAreas.map((value) => {
      return (
        <Card key={value.id} listCard={listAreas} setListCard={setListAreas} id={value.id} nome={value.nome} descricao={value.descricao} horario_abertura={value.horario_abertura} horario_fechamento={value.horario_fechamento}></Card>
      )
    })}
    </div>
  )
}

export default App;
