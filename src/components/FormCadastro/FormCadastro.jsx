import React, {useState, useEffect} from 'react';
import "./estilo.css"

function FormCadastro(props) {
    //console.log("Carregou form de cadastro de notas");
    var titulo = "";
    var texto = "";
    var categoria = "Sem categoria";
    
    const [categorias, setaCategorias] = useState([]);

    useEffect(() => {
        props.categorias.inscrever(novasCategorias);
    }, []);

    const novasCategorias = novaCategoria => {
        setaCategorias(categorias.concat(novaCategoria));
    }
    
    const handleMudancaCategoria = evento => {
        categoria = evento.target.value;
        evento.stopPropagation();
        //console.log("Mudou a categoria");
    }

    const handleMudancaTitulo = evento => {
        titulo = evento.target.value;
        evento.stopPropagation();
    }

    const handleMudancaTexto = evento => {
        texto = evento.target.value;
        evento.stopPropagation();
    }

    var arrayNotas = [];
    const criarNota = evento => {
        var index = Math.random();
        evento.preventDefault();
        evento.stopPropagation();
        const novaNota = {
            index,
            titulo,
            texto,
            categoria
        };
        arrayNotas.push(novaNota);
        props.criarNota.adicionarNota(index, titulo, texto, categoria);
        // console.log(novaNota);
    }

    return (
        <form className="form-cadastro"
            onSubmit={criarNota}>

            <select className="form-cadastro_input"
                onChange={handleMudancaCategoria}>
                <option value={categoria}>-- Nenhum --</option>
                {
                categorias.map((categoria, index) => {
                    return <option key={index}
                        value={categoria}>
                        {categoria}</option>
            })
            } </select>

            <input type="text" placeholder="Título" className="form-cadastro_input"
                onChange={handleMudancaTitulo}/>

            <textarea rows={15}
                placeholder="Escreva sua nota..."
                className="form-cadastro_input"
                onChange={handleMudancaTexto}/>

            <button className="form-cadastro_input form-cadastro_submit">
                Criar Nota
            </button>
        </form>
    );
}

export default FormCadastro;
