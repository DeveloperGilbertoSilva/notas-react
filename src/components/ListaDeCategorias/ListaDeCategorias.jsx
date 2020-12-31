import React,{useState, useEffect} from 'react';
import "./estilo.css"

function ListaDeCategorias(props) {
    const [categorias, setaCategorias] = useState([]);

    useEffect(() => {
        props.categorias.inscrever(novasCategorias);
    }, []);

    const novasCategorias = novaCategoria => {
        setaCategorias(categorias.concat(novaCategoria));
    }

    const handleEventoInput = event => {
        if(event.key === "Enter"){
            props.adicionarCategoria.adicionarCategoria(event.target.value);
            event.target.value = "";
        }
    }

    return (
        <section className="lista-categorias">
            <ul className="lista-categorias_lista">
                {
                    categorias.map((categoria, index) => {
                        return <li key={index} className="lista-categorias_item">{categoria}</li>
                    })
                }
            </ul>

            <input type="text" className="lista-categorias_input" placeholder="Adicionar Categoria" onKeyUp={handleEventoInput}/>
        </section>
    );
}

export default ListaDeCategorias;
