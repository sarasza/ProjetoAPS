import React from "react";
import "./card.css";
import FormDialog from "../dialog/dialog.js";

export default function Card(props) {
    const [open, setOpen] = React.useState(false);

    const handleClickCard = () => {
        setOpen(true);
    };
    
    return (
        <>
            <FormDialog open={open} setOpen={setOpen} nome={props.nome} descricao={props.descricao} horario_abertura={props.horario_abertura} horario_fechamento={props.horario_fechamento} listCard={props.listCard} setListCard={props.setListCard} id={props.id} />
            <div className="card--container" onClick={() => handleClickCard()}>
                <h1 className="card--nome">{props.nome}</h1>
                <p className="card--descricao">{props.descricao}</p>
                <p className="card--horarioA">{props.horario_abertura}</p>
                <p className="card--horarioF">{props.horario_fechamento}</p>
            </div>
        </>
    );
};