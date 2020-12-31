import React from 'react';
import "./estilo.css";
import {ReactComponent as DeleteSVG} from "../../assets/img/delete.svg";

function CardNota(props) {
    //console.log("Carregou cards de notas");
    return (
        <section className="card-nota">
            <header className="card-nota_cabecalho">
                <h3 className="card-nota_titulo">
                    Título: {
                    props.titulo
                }</h3>
                <DeleteSVG onClick={
                    () => {
                        props.apagarNota.apagarNota(props.indexNota);
                        props.apagarNota.desinscrever(props.funcao);
                        
                    }
                }/>
            </header>
        <h4 className="card-nota_texto">
            Categoria: {
            props.categoria
        } </h4>
        <p className="card-nota_texto">
            Texto: {
            props.texto
        }</p>
    </section>
    );
}

export default CardNota;
