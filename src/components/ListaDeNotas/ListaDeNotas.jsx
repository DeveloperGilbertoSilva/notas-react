import React, {useEffect, useState} from 'react';
import CardNota from '../CardNota/';
import "./estilo.css"

function ListaDeNotas(props) {
    //console.log("Carregou lista de notas");
    const [notas, setaNotas] = useState([]);
    
    useEffect(() => {
        props.notas.inscrever(novasNotas);
        
        return () => {
            props.notas.desinscrever(novasNotas)
        };
    }, []);

    const novasNotas = novaNota => {
        setaNotas(notas.concat(novaNota));
    }
    //console.log(notas);

    return (
        <ul className="lista-notas">
            {
            notas.map((nota, index) => {
                return (
                    <li className="lista-notas_item"
                        key={index}>
                        <CardNota titulo={
                                nota.titulo
                            }
                            texto={
                                nota.texto
                            }
                            categoria={
                                nota.categoria
                            }
                            indexNota={
                                nota.index
                            }
                            apagarNota={
                                props.apagarNota
                            }  

                            funcao={
                                novasNotas
                            }/>
                    </li>
                );
            })
        } </ul>
    );

}

export default ListaDeNotas;
