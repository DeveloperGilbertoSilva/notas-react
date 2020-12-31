export default class ArrayDeNotas{
    constructor(){
        this.notas = [];
        this._inscritos = [];
    }

    adicionarNota(index, titulo, texto, categoria){
        //const novaNota = new Nota(index, titulo, texto, categoria);
        const novaNota = {
            "index": index,
            "titulo": titulo,
            "texto": texto,
            "categoria": categoria
        };
        this.notas.push(novaNota);
        this.notificar();
        //console.log(novaNota);
    }
    
    apagarNota(index){
        this.notas = this.notas.filter(nota => nota.index !== index);
        this.notificar();
        //console.log(index);
    }
    
    inscrever(func){
        this._inscritos.push(func);
        //console.log(this._inscritos);
        //console.log("Inscreveu");
    }
    desinscrever(func){
        this._inscritos = this._inscritos.splice(func,1);
        //console.log("Desinscreveu");
    }
    
    notificar(){ 
        this._inscritos.forEach(func =>{
            func(this.notas);
        });
        
        //console.log(this._inscritos);
        //console.log(this.notas);
    }
}
