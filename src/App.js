import React from 'react';
import ListaDeNotas from './components/ListaDeNotas/';
import FormCadastro from './components/FormCadastro/';
import ListaDeCategorias from './components/ListaDeCategorias/';
import './assets/App.css';
import './index.css';
import ArrayNotas from './dados/Notas';
import Categorias from './dados/Categorias';

function App() {
    //const [notas, setaNotas] = useState([]);
    //const [categorias, setaCategorias] = useState([]);

    const notas = new ArrayNotas();
    const categorias = new Categorias();

    // const criarNota = arrayNotas => {
    //     setaNotas(notas.concat(arrayNotas));
    // }

    // const deletarNota = index => {
    //     setaNotas(notas.filter(nota => nota.index !== index));
    // }

    // const adicionarCategoria = nomeCategoria => {
    //     const novaCategoria = [
    //         ...categorias,
    //         nomeCategoria
    //     ];
    //     setaCategorias(novaCategoria);
    // }


    return (
        <section className="conteudo">
            <FormCadastro categorias={categorias} criarNota={notas}/>
            <main className="conteudo-principal">
                <ListaDeCategorias adicionarCategoria={categorias}
                    categorias={categorias}/>
                <ListaDeNotas notas={notas}
                    apagarNota={notas}/>
            </main>
        </section>
    );
}

export default App;
