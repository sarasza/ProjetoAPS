import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Axios from "axios";
import produce from "immer";

export default function FormDialog(props) {

    const [editValues, setEditValues] = useState({
        id: props.id,
        nome: props.nome,
        descricao: props.descricao,
        horario_abertura: props.horario_abertura,
        horario_fechamento: props.horario_fechamento,
    });

    const handleEditArea = () => {
        Axios.put("http://localhost:3001/edit", {
            id: editValues.id,
            nome: editValues.nome,
            descricao: editValues.descricao,
            horario_abertura: editValues.horario_abertura,
            horario_fechamento: editValues.horario_fechamento,
        });

        handleClose();
    };

    const handleDeleteArea = () => {
        Axios.delete(`http://localhost:3001/delete/${editValues.id}`);
        handleClose();
    }

    const handleClickOpen = () => {
        props.setOpen(true);
    };
    const handleClose = () => {
        props.setOpen(false);
    };

    const handleChangeValues = value  => {
        setEditValues(prevValues => ({
            ...prevValues,
            [value.target.id]: value.target.value,
        }));
    };

    return (
        <Dialog
            open={props.open}
            onClose={handleClose}
            aria-labelledby="form-dialog-title"
        >
            <DialogTitle id="form-dialog-title">Editar</DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    id="nome"
                    label="Nome da área comum"
                    defaultValue={props.nome}
                    onChange={handleChangeValues}
                    type="text"
                    fullWidth
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="descricao"
                    label="Descrição da área comum"
                    defaultValue={props.descricao}
                    onChange={handleChangeValues}
                    type="text"
                    fullWidth
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="horario_abertura"
                    label="Horário de Abertura"
                    defaultValue={props.horario_abertura}
                    onChange={handleChangeValues}
                    type="text"
                    fullWidth
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="horario_fechamento"
                    label="Horário de Fechamento"
                    defaultValue={props.horario_fechamento}
                    onChange={handleChangeValues}
                    type="text"
                    fullWidth
                />
            </DialogContent>
            <DialogActions>
            <Button onClick={handleClose} color="primary">
                Cancel
            </Button>
            <Button onClick={() => handleDeleteArea()} color="primary" >
                Excluir
            </Button>
            <Button onClick={() => handleEditArea()} color="primary" >
                Salvar
            </Button>
            </DialogActions>
        </Dialog>
    );
}